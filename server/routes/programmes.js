const express = require('express');
const dataaccess = require('../dataaccess/programmes');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const programmes = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllProgrammes(sorting, isAscending, filterProperty, filterValue));
            res.json(programmes);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id',
    authenticate,
    authorize(features.ProgramManagement),
    async (req, res) => {
        const { id } = req.params;
        const programme = await dataaccess.getProgrammeById(id);

        if (programme === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(programme);
    }
);

router.post('/',
    authenticate,
    authorize(features.CreateProgramme),
    async (req, res, next) => {
        try {
            const programmeDto = req.body;
            const programme = await dataaccess.createProgramme(programmeDto);
            res.json(programme);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    authenticate,
    authorize(features.EditProgramme),
    async (req, res, next) => {
        const programmeDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const programme = await dataaccess.updateProgramme(idAsNumber, programmeDto);
            res.json(programme);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:id',
    authenticate,
    authorize(features.DeleteProgramme),
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
