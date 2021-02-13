const express = require('express');
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

        const token = generateToken(user);
        res.json({
            token,
            data: {
                EmailAddress: user.EmailAddress
            }
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;