const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const schoolRouter = require('./routes/schools.js');
const personRouter = require('./routes/persons.js');
const userRouter = require('./routes/users.js');
const app = express();
const port = 5000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'));

app.use('/api/school', schoolRouter);
app.use('/api/person', personRouter);
app.use('/api/user', userRouter);

app.use((error, _req, res, _next) => {
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