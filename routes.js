/*
 |--------------------------------------------------------------------------
 | Call the packages
 |--------------------------------------------------------------------------
 */
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

const helpers    = require('./helpers');

let users        = require('./users');

/*
 |--------------------------------------------------------------------------
 | Configure app to use bodyParser()
 |--------------------------------------------------------------------------
 |
 | This will let us get the data from a POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = express.Router();

/*
 |--------------------------------------------------------------------------
 | Put middleware on api routes.
 |--------------------------------------------------------------------------
 |
 | Check if request is ajax
 */

router.use((req, res, next) => {
    if (req.xhr) {
        next();
    } else {
        res.status(403).send('Forbidden!');
    }
});

/*
 |--------------------------------------------------------------------------
 | Api routes.
 |--------------------------------------------------------------------------
 */

router.get('/', function(req, res) {
    res.json(users);
})
.get('/:userId', function (req, res) {
    let user = helpers.getUserById(users, parseInt(req.params.userId));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found!');
    }
}).put('/:userId', function(req, res) {

    let updatedUser = helpers.updateUserById(users, req.query, parseInt(req.params.userId));
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).send('User not found!');
    }

}).delete('/:userId', function(req, res) {

    let checkIfRemoved = helpers.removeUserById(users, parseInt(req.params.userId));
    if (checkIfRemoved) {
        res.json("User removed!");
    } else {
        res.status(404).send('User not found!');
    }

});

module.exports = router;