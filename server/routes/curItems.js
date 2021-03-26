const express = require('express');
const dataaccess = require('../dataaccess/curItems');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const curItems = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllCurItems(sorting, isAscending, filterProperty, filterValue));
            res.json(curItems);
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
        const curItem = await dataaccess.getCurItemById(id);

        if (curItem === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(curItem);
    }
);

router.post('/',
    authenticate,
    authorize(features.CreateProgramme),
    async (req, res, next) => {
        try {
            const curItemDto = req.body;
            const curItem = await dataaccess.createCurItem(curItemDto)
            res.json(curItem);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    authenticate,
    authorize(features.EditProgramme),
    async (req, res, next) => {
        const curItemDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const curItem = await dataaccess.updateCurItem(idAsNumber, curItemDto);
            res.json(curItem);
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
