const express = require('express');
const dataaccess = require('../dataaccess/schoolTeacher');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.post('/school/:id/teacher/assign',
    authenticate,
    authorize(features.EditTeacherAssigments, req => ({ schoolId: req.params.id })),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const teacherDto = req.body;
            const teacher = await dataaccess.assignTeacherToSchool(id, teacherDto)
            res.json(teacher);
        } catch (error) {
            next(error);
        }
    });

router.post('/school/:id/teacher/deassign',
    authenticate,
    authorize(features.EditTeacherAssignments, req => ({ schoolId: req.params.id })),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const teacherDto = req.body;
            await dataaccess.deassignTeacherFromSchool(id, teacherDto);
            res.json(`Deleted items from School with Id ${id}`);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;