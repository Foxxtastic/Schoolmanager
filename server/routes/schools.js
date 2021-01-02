const express = require('express');
const dataaccess = require('../dataaccess/index');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { pageNumber, pageSize } = req.query;
        const schools = await (pageNumber && pageSize ? dataaccess.listPaged(pageNumber, pageSize) : dataaccess.listAllSchools());
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
    } catch (error) {
        next(error);
    }
    res.sendStatus(200);
});

module.exports = router;