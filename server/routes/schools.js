const express = require('express');
const dataaccess = require('../dataaccess/index');
const router = express.Router();

router.get('/', async (req, res) => {
    const allSchools = await dataaccess.listAllSchools();
    res.json(allSchools);
});

module.exports = router;