const db = require('../models/dbIndex');

const createEvent = async (req, res, next) => {
  try{
		console.log('IM HERE')
		const queryText = 'INSERT INTO events VALUES(DEFAULT, $1, $2, $3,  DEFAULT) RETURNING u_id';
		const { name, organization, start_time, end_time, description} = req.body;
		const { rows } = await db.query(queryText, [name, organization, start_time, end_time, description,]);
		console.log(rows[0]);
		//todo: this should return the u_id of the created user
		res.locals.data = rows[0];
		return next();
	} catch (error) {
		await db.query( 'ROLLBACK' );
		return next(error);
	}
}

// const updateEvent = (req, res, next) => {
//   const {id, name, organization, start_time, end_time, description,} = req.body;
//   const query = 'UPDATE "Events" '
// }

const deleteEvent = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM events WHERE _id = $1';
  const arr = [id];

  db.query(query, arr, err => {
      if (err) {
          return next(err)
      } else {
          return next();
      }
  })
}

const getEvents = (req, res, next) => {
  const query = 'SELECT * FROM events ORDER_BY _id';
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
  // updateEvent,
  deleteEvent,
  getEvents,
  createEvent
}