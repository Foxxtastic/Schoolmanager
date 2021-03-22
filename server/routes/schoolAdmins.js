const express = require('express');
const dataaccess = require('../dataaccess/schoolAdmins');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    // authenticate,
    // authorize(features.MajorManagement),
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const admins = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllSchoolAdmins(sorting, isAscending, filterProperty, filterValue));
            res.json(admins);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:userId',
    // authenticate,
    // authorize(features.MajorManagement),
    async (req, res) => {
        const { id: userId } = req.params;
        const admin = await dataaccess.getSchoolAdminByUserId(userId);

        if (admin === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(admin);
    }
);

router.post('/',
    // authenticate,
    // authorize(features.CreateMajor),
    async (req, res, next) => {
        try {
            const adminDto = req.body;
            const admin = await dataaccess.createSchoolAdmin(adminDto);
            res.json(admin);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    // authenticate,
    // authorize(features.EditMajor),
    async (req, res, next) => {
        const adminDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const admin = await dataaccess.updateSchoolAdmin(idAsNumber, adminDto);
            res.json(admin);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:id',
    // authenticate,
    // authorize(features.DeleteMajor),
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