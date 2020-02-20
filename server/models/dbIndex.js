const { Pool } = require('pg');

const PG_URI = 'postgres://mgumvlag:kY_BJVfzCvFA3U0x9m9P5mI49SnzWboL@rajje.db.elephantsql.com:5432/mgumvlag';

const pool = new Pool({
	connectionString: PG_URI
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};
