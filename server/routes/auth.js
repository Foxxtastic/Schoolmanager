const express = require('express');
const { getFeatures } = require('../dataaccess/features');
const { getUserByEmailAddress, isPasswordValid } = require('../dataaccess/users');
const { generateToken } = require('../helpers/generateToken');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        const loginFormDto = req.body;
        const user = await getUserByEmailAddress(loginFormDto.EmailAddress);

        if (!user) {
            const error = new Error("The user with this email doesn't exist in the system");
            error.status = 400;
            throw error;
        }

        if (!user.IsActive) {
            const error = new Error('Inactive user');
            error.status = 401;
            throw error;
        }

        if (!await isPasswordValid(user.Id, loginFormDto.Password)) {
            const error = new Error('Invalid password');
            error.status = 401;
            throw error;
        }

        delete user.PasswordHash;

        const availableFeatures = await getFeatures(user.Id);

        user.features = availableFeatures;

        const token = generateToken(user);
        res.json({
            token,
            emailAddress: user.EmailAddress,
            features: user.features
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;