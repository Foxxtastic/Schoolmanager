const express = require('express');
const dataaccess = require('../dataaccess/schools');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
        const isAscending = isDescending && isDescending === 'true' ? false : true;
        const schools = await (pageNumber && pageSize ?
            dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
            dataaccess.listAllSchools(sorting, isAscending, filterProperty, filterValue));
        res.json(schools);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const school = await dataaccess.getSchoolById(id);

    if (school === undefined) {
        res.sendStatus(404);
        return;
    }

    res.json(school);
});

router.post('/', async (req, res, next) => {
    try {
        const schoolDto = req.body;
        const school = await dataaccess.createSchool(schoolDto);
        res.json(school);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const schoolDto = req.body;
    const { id } = req.params;
    const idAsNumber = parseInt(id, 10);

    try {
        const school = await dataaccess.updateSchool(idAsNumber, schoolDto);
        res.json(school);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await dataaccess.deleteById(id);
        res.json(`Deleted item with Id ${id}`);
    } catch (error) {
        next(error);
    }
});

module.exports = router;