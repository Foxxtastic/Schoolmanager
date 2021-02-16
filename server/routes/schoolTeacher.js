const express = require('express');
const dataaccess = require('../dataaccess/schoolTeacher');
const { authenticate } = require('../middlewares/authenticate');
const router = express.Router();

router.post('/school/:id/teacher/assign', authenticate, async (req, res, next) => {
    try {
        const { id } = req.params;
        const teacherDto = req.body;
        const teacher = await dataaccess.assignTeacherToSchool(id, teacherDto)
        res.json(teacher);
    } catch (error) {
        next(error);
    }
});

router.post('/school/:id/teacher/deassign', authenticate, async (req, res, next) => {
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