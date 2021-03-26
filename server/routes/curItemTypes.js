const express = require('express');
const dataaccess = require('../dataaccess/curItemTypes');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const curItemTypes = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllCurItemTypes(sorting, isAscending, filterProperty, filterValue));
            res.json(curItemTypes);
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
        const curItemType = await dataaccess.getCurItemTypeById(id);

        if (curItemType === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(curItemType);
    }
);

router.get('/sc/:id',
    authenticate,
    authorize(features.ProgramManagement),
    async (req, res) => {
        const { schoolId } = req.params;
        const curItemType = await dataaccess.getCurItemTypeBySchoolId(schoolId);

        if (curItemType === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(curItemType);
    }
);

router.post('/',
    authenticate,
    authorize(features.CreateProgramme),
    async (req, res, next) => {
        try {
            const curItemTypeDto = req.body;
            const curItemType = await dataaccess.createCurItemType(curItemTypeDto)
            res.json(curItemType);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    authenticate,
    authorize(features.EditProgramme),
    async (req, res, next) => {
        const curItemTypeDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const curItemType = await dataaccess.updateCurItemType(idAsNumber, curItemTypeDto);
            res.json(curItemType);
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
