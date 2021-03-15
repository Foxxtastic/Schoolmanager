const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authRouter = require('./routes/auth.js');
const schoolRouter = require('./routes/schools.js');
const userRouter = require('./routes/users.js');
const majorRouter = require('./routes/majors.js');
const teacherRouter = require('./routes/teachers.js');
const studentRouter = require('./routes/students.js');
const schoolTeacherRouter = require('./routes/schoolTeacher.js');
const schoolStudentRouter = require('./routes/schoolStudent.js');
const studentRequestRouter = require('./routes/StudentRequest.js');
const programmeRouter = require('./routes/educationalProgrammes.js');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 5000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'));

app.use('/api/auth', authRouter);
app.use('/api/school', schoolRouter);
app.use('/api/user', userRouter);
app.use('/api/major', majorRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/student', studentRouter);
app.use('/api/', schoolTeacherRouter);
app.use('/api/', schoolStudentRouter);
app.use('/api/request', studentRequestRouter);
app.use('/api/programme', programmeRouter);

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