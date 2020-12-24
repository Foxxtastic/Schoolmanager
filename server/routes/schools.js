const express = require('express');
const dataaccess = require('../dataaccess/index');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const allSchools = await dataaccess.listAllSchools();
        res.json(allSchools);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const schoolDto = req.body;
        const school = await dataaccess.createSchool(schoolDto);
        res.json(school);
    } catch (error) {
        next(error);
    }
});

router.delete('/:idx', async (req, res) => {
    const { idx } = req.params;
    try {
        await dataaccess.deleteByIdx(idx);
    } catch (error) {
        next(error);
    }
    res.sendStatus(200);
});

module.exports = router;