const db = require('../models/dbIndex');

const createSlot = async (req, res, next) => {
  try{
		console.log('IM HERE')
		const queryText = 'INSERT INTO slots VALUES(DEFAULT, $1, $2, $3, $4,  DEFAULT) RETURNING u_id';
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

// const updateSlot = (req, res, next) => {
//   const {id, event, organization, start_time, end_time} = req.body;
//   const query = 'UPDATE "Slots"'
// }

const deleteSlot = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Slots" WHERE _id = $1';
  const arr = [id];

  db.query(query, arr, err => {
      if (err) {
          return next(err)
      } else {
          return next();
      }
  })
}

// const getSlots...

module.exports = {
  // updateSlot,
  deleteSlot,
  createSlot
  // getSlots
}