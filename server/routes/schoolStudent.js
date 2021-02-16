const express = require('express');
const dataaccess = require('../dataaccess/schoolStudent');
const { authenticate } = require('../middlewares/authenticate');
const router = express.Router();

router.post('/school/:id/student/assign', authenticate, async (req, res, next) => {
    try {
        const { id } = req.params;
        const studentDto = req.body;
        const student = await dataaccess.assignStudentToSchool(id, studentDto)
        res.json(student);
    } catch (error) {
        next(error);
    }
});

router.post('/school/:id/student/deassign', authenticate, async (req, res, next) => {
    try {
        const { id } = req.params;
        const studentDto = req.body;
        await dataaccess.deassignStudentFromSchool(id, studentDto);
        res.json(`Deleted items from School with Id ${id}`);
    } catch (error) {
        next(error);
    }
});

module.exports = router;