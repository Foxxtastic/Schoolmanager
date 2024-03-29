const express = require('express');
const dataaccess = require('../dataaccess/users');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    authenticate,
    authorize(features.UserManagement),
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const users = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllUsers(sorting, isAscending, filterProperty, filterValue));
            res.json(users);
        } catch (error) {
            next(error);
        }
    });

router.get('/:param',
    authenticate,
    authorize(features.UserManagement),
    async (req, res) => {
        const { param } = req.params;
        const user = await dataaccess.getUserById(param);
        if (user === undefined) {
            res.sendStatus(404);
            return;
        }
        res.json(user);
    });

router.post('/',
    authenticate,
    authorize(features.CreateUser),
    async (req, res, next) => {
        try {
            const userDto = req.body;
            const user = await dataaccess.createUser(userDto);
            res.json(user);
        } catch (error) {
            next(error);
        }
    });

router.put('/:id',
    authenticate,
    authorize(features.EditUser),
    async (req, res, next) => {
        const userDto = req.body;
        const { id } = req.params;
        const idAsNumber = parseInt(id, 10);

        try {
            const user = await dataaccess.updateUser(idAsNumber, userDto);
            res.json(user);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:id',
    authenticate,
    authorize(features.DeleteUser),
    async (req, res, next) => {
        const { id } = req.params;
        try {
            await dataaccess.deleteById(id);
            res.json(`Deleted item with Id ${id}`);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;