const express = require('express');
const dataaccess = require('../dataaccess/schoolAdmins');
const { authenticate } = require('../middlewares/authenticate');
const router = express.Router();

router.get('/:email', authenticate, async (req, res, next) => {
    try {
        const { email } = req.params;
        const schoolAdmin = await dataaccess.getSchoolAdminByEmailAddress(email);

        if (schoolAdmin === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(schoolAdmin);
    } catch (error) {
        next(error);
    }
});

module.exports = router;