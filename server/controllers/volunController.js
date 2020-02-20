const db = require('../models/dbIndex');

const volunController = {};

volunController.createVolun = async (req, res, next) => {
	try{
		console.log('IM HERE');
		const queryText = 'INSERT INTO volunteers VALUES(DEFAULT, $1, $2, $3, DEFAULT) RETURNING u_id';
		const { name, password, email } = req.body;
		console.log(name, password, email);
		const { rows } = await db.query(queryText, [name, password, email]);
		//todo: this should return the u_id of the created user OK
		res.locals.data = rows[0];
		return next();
	} catch (error) {
		await db.query( 'ROLLBACK' );
		return next(error);
	}
};

// volunController.updateVolun = async (req, res, next) => {
// 	// try{
// 	// 	const
// 	//
// 	// }
// 	// catch(e){
// 	// 	await db.query('ROLLBACK');
// 	// 	return next(e)
// 	// }
// }

volunController.deleteVolun = async (req, res, next) => {
	try{
		const {u_id} = req.params;
		const queryText = 'DELETE FROM public.volunteers WHERE u_id = $1';
		const { rows } = await db.query(queryText, [u_id]);
		console.log(rows[0]);
		res.locals.data = rows[0];
		return next();
	}
	catch(error){
		await db.query( 'ROLLBACK' );
		return next(error);
	}
};

volunController.getVoluns = async (req, res, next) => {
	try{
		const {filterElement, filterId, returnElements} = req.params;
		if (filterElement && filterId) {
			console.log('filtered get route')
			const queryText = 'SELECT * FROM volunteers WHERE $1 = $2;';
			if (returnElements) {
				console.log('also return modified get route')
				const queryTextAdd = returnElements.split('&').join(', ');
				queryText.replace('*', queryTextAdd);
			}
			
			const { rows } = await db.query(queryText, [filterElement, filterId]);
			console.log(rows);
			res.locals.data = rows[0];
			return next();
		}
		console.log('plain get route');
		const queryText = 'SELECT * FROM volunteers ORDER BY name;';
		const { rows } = await db.query(queryText, []);
		console.log(rows);
		res.locals.data = [...rows];
		return next();
	}
	catch(error){
		await db.query( 'ROLLBACK' );
		return next(error);
	}
}


module.exports = volunController;
