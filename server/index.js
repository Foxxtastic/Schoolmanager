const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const schoolsRouter = require('./routes/schools.js');
const app = express();
const port = 5000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'));

app.use('/api/schools', schoolsRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});