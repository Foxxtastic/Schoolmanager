const express = require('express');
const dataaccess = require('../dataaccess/majors');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    authenticate,
    authorize(features.MajorManagement),
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const majors = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllMajors(sorting, isAscending, filterProperty, filterValue));
            res.json(majors);
        } catch (error) {
            next(error);
        }
    });

router.get('/:id',
    authenticate,
    authorize(features.MajorManagement),
    async (req, res) => {
        const { id } = req.params;
        const major = await dataaccess.getMajorsById(id);

        if (major === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(major);
    });

router.post('/',
    authenticate,
    authorize(features.CreateMajor),
    async (req, res, next) => {
        try {
            const majorDto = req.body;
            const major = await dataaccess.createMajor(majorDto);
            res.json(major);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    authenticate,
    authorize(features.EditMajor),
    async (req, res, next) => {
        const majorDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const major = await dataaccess.updateMajor(idAsNumber, majorDto);
            res.json(major);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:id',
    authenticate,
    authorize(features.DeleteMajor),
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