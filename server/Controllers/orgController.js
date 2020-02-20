const db = require('../models/dbIndex');

const createOrg = async (req, res, next) => {
  try{
		console.log('IM HERE')
		const queryText = 'INSERT INTO organizations VALUES(DEFAULT, $1, $2, $3, $4, DEFAULT) RETURNING u_id';
		const { name, description, email, password} = req.body;
		const { rows } = await db.query(queryText, [name, description, password, email]);
		console.log(rows[0]);
		//todo: this should return the u_id of the created user
		res.locals.data = rows[0];
		return next();
	} catch (error) {
		await db.query( 'ROLLBACK' );
		return next(error);
	}
}

// const updateOrg = (req, res, next) => {
//     const {id, name, description, email, password} = req.body;
//     const query = 'UPDATE "Organizations"'
// }

const deleteOrg = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM organizations WHERE _id = $1';
  const arr = [id];

  db.query(query, arr, err => {
      if (err) {
          return next(err)
      } else {
          return next();
      }
  })
}

const getOrgs = (req, res, next) => {
  const query = 'SELECT * FROM organizations ORDER_BY _id';
    db.query(query, (err, message) => {
        if (err) {
            return next(err);
        } else {
            res.locals.message = message.rows;
            return next()
        }
    });
}

module.exports = {
  deleteOrg,
//   updateOrg,
  createOrg,
  getOrgs
}