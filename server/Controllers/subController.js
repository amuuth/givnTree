const db = require('../models/dbIndex');

const createSub = async (req, res, next) => {
  try{
		console.log('IM HERE')
		const queryText = 'INSERT INTO subscriptions VALUES(DEFAULT, $1, $2, $3, $4,  DEFAULT) RETURNING u_id';
		const { event, organization, start_time, end_time} = req.body;
		const { rows } = await db.query(queryText, [event, organization, start_time, end_time]);
		console.log(rows[0]);
		//todo: this should return the u_id of the created user
		res.locals.data = rows[0];
		return next();
	} catch (error) {
		await db.query( 'ROLLBACK' );
		return next(error);
	}
}

// const updateSub = (req, res, next) => {
//   const {id, volunteer, slot} = req.body;
//   const query = 'UPDATE "Subscriptions"'
// }

const deleteSub = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Subscriptions" WHERE _id = $1';
  const arr = [id];

  db.query(query, arr, err => {
      if (err) {
          return next(err)
      } else {
          return next();
      }
  })
}

// const getSubs 

module.exports = {
  // updateSub,
  deleteSub,
  // getSubs,
  createSub
}