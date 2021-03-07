const express = require('express');
const dataaccess = require('../dataaccess/students');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    authenticate,
    authorize([features.StudentManagement, features.EditStudentAssignments]),
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue, schoolId, schoolLess } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;

            if (schoolLess) {
                const students = await dataaccess.getStudentsWithoutSchool();
                res.json(students);
                return;
            }

            const students = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue, schoolId) :
                dataaccess.listAllStudents(sorting, isAscending, filterProperty, filterValue, schoolId));
            res.json(students);
        } catch (error) {
            next(error);
        }
    });

router.get('/:id',
    authenticate,
    authorize([features.StudentManagement, features.EditStudentAssignments]),
    async (req, res) => {
        const { id } = req.params;
        const student = await dataaccess.getStudentById(id);

        if (student === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(student);
    });

router.post('/',
    authenticate,
    authorize(features.CreateStudent),
    async (req, res, next) => {
        try {
            const studentDto = req.body;
            const student = await dataaccess.createStudent(studentDto);
            res.json(student);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    authenticate,
    authorize(features.EditStudent),
    async (req, res, next) => {
        const studentDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const student = await dataaccess.updateStudent(idAsNumber, studentDto);
            res.json(student);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:id',
    authenticate,
    authorize(features.DeleteStudent),
    async (req, res, next) => {
        const { id } = req.params;
        try {
            await dataaccess.deleteById(id);
            res.json({ deletedId: id });
        } catch (error) {
            next(error);
        }
    });

module.exports = router;