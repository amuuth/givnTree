//============== Server Setup ======//
const express = require('express');
const app = express();



//============== DB Connection ======//
/*
* @ create DB Connection here
 */

//============== Dependency Requirements ======//
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

//============== Internal Dependency Requirements ======//
// * @ add controllers here
// * @ add routers here
/*
* todo: add controllers here
* todo: add routers here
 */
const volunRouter = require('./routs/volunRouter');
const orgRouter = require('./routs/orgRouter');
const subRouter = require('./routs/subRouter');
const eventRouter = require('./routs/eventRouter');
const slotRouter = require('./routs/slotRouter');




//============== Server Setup ======//
app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




//========== Routes ==========//

app.use('/volunteer', volunRouter);
app.use('/organization', orgRouter);
app.use('/events', eventRouter);

app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



//======== Global Error Handlers ======//
app.use('*', (req, res) => {
	res.status(404).redirect('/404');
});

app.use((err, req, res, next) => {
	res.send(err);
});


//============= Start Server ==========//
app.listen(process.env.PORT || 8080, () => {
	console.log(`the sever is listening to 8080`)
});


module.exports = app;

