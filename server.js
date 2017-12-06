/*
 |--------------------------------------------------------------------------
 | Call the packages
 |--------------------------------------------------------------------------
 */
const express    = require('express');
const app        = express();

/*
 |--------------------------------------------------------------------------
 | Register routes
 |--------------------------------------------------------------------------
 |
 | All of routes will be prefixed with /api/users
 */
let router = require('./routes');

app.use('/api/users', router);

/*
 |--------------------------------------------------------------------------
 | Start the server
 |--------------------------------------------------------------------------
 */
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});