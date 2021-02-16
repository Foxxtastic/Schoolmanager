const express = require('express');
const dataaccess = require('../dataaccess/teachers');
const { authenticate } = require('../middlewares/authenticate');
const router = express.Router();

router.get('/', authenticate, async (req, res, next) => {
    try {
        const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue, schoolId, schoolLess } = req.query;
        const isAscending = isDescending && isDescending === 'true' ? false : true;

        if (schoolLess) {
            const teachers = await dataaccess.getTeachersWithoutSchool();
            res.json(teachers);
            return
        }

        const teachers = await (pageNumber && pageSize ?
            dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue, schoolId) :
            dataaccess.listAllTeachers(sorting, isAscending, filterProperty, filterValue, schoolId));
        res.json(teachers);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const teacher = await dataaccess.getTeacherById(id);

    if (teacher === undefined) {
        res.sendStatus(404);
        return;
    }

    res.json(teacher);
});

router.post('/', authenticate, async (req, res, next) => {
    try {
        const teacherDto = req.body;
        const teacher = await dataaccess.createTeacher(teacherDto);
        res.json(teacher);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', authenticate, async (req, res, next) => {
    const teacherDto = req.body;
    const { id } = req.params;
    const idAsNumber = parseInt(id, 10);

    try {
        const teacher = await dataaccess.updateTeacher(idAsNumber, teacherDto);
        res.json(teacher);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', authenticate, async (req, res, next) => {
    const { id } = req.params;
    try {
        await dataaccess.deleteById(id);
        res.json({ deletedId: id });
    } catch (error) {
        next(error);
    }
});

module.exports = router;