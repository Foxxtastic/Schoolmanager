const express = require('express');
const dataaccess = require('../dataaccess/persons');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue } = req.query;
        const isAscending = isDescending && isDescending === 'true' ? false : true;
        const persons = await (pageNumber && pageSize ?
            dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
            dataaccess.listAllPersons(sorting, isAscending, filterProperty, filterValue));
        res.json(persons);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const person = await dataaccess.getPersonById(id);

    if (person === undefined) {
        res.sendStatus(404);
        return;
    }

    res.json(person);
});

router.post('/', async (req, res, next) => {
    try {
        const personDto = req.body;
        const person = await dataaccess.createPerson(personDto);
        res.json(person);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const personDto = req.body;
    const { id } = req.params;
    const idAsNumber = parseInt(id, 10);

    try {
        const person = await dataaccess.updatePerson(idAsNumber, personDto);
        res.json(person);
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