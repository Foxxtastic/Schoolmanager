const express = require('express');
const dataaccess = require('../dataaccess/users');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
        console.log(filterValue)
        const isAscending = isDescending && isDescending === 'true' ? false : true;
        const users = await (pageNumber && pageSize ?
            dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
            dataaccess.listAllUsers(sorting, isAscending, filterProperty, filterValue));
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await dataaccess.getUserById(id);

    if (user === undefined) {
        res.sendStatus(404);
        return;
    }

    res.json(user);
});

router.post('/', async (req, res, next) => {
    try {
        const userDto = req.body;
        const user = await dataaccess.createUser(userDto);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
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

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await dataaccess.deleteById(id);
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

module.exports = router;