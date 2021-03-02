const express = require('express');
const dataaccess = require('../dataaccess/studentRequest');
const features = require('../features');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');
const router = express.Router();

router.get('/',
    authenticate,
    authorize([features.StudentRequestAssessment]),
    async (req, res, next) => {
        try {
            const { pageNumber, pageSize, sorting, isDescending, filterProperty, filterValue, schoolId } = req.query;
            const isAscending = isDescending && isDescending === 'true' ? false : true;
            const request = await (pageNumber && pageSize ?
                dataaccess.listPaged(pageNumber, pageSize, sorting, isAscending, filterProperty, filterValue) :
                dataaccess.listAllStudentRequests(sorting, isAscending, filterProperty, filterValue));
            res.json(request);
        } catch (error) {
            next(error);
        }
    });

router.get('/student/:email',
    authenticate,
    authorize([features.StudentRequestAssessment]),
    async (res, req) => {
        const { email } = req.req.params;

        const request = await dataaccess.getStudentByEmailAddress(email);

        if (request === undefined) {
            res.sendStatus(404);
            return
        }

        res.res.json(request);
    });

router.get('/school/:schoolId',
    authenticate,
    authorize(
        [features.StudentRequestAssessment, req => ({ schoolId: req.params.id })],
        [features.StudentRequestAssessment, req => ({ schoolId: req.params.id })]
        [features.UserManagement],
        [features.StudentDashboard]
    ),
    async (req, res) => {
        const { schoolId } = req.params;
        const { studentId } = req.query;

        const request = await (studentId === undefined ?
            dataaccess.getStudentRequestsBySchoolId(schoolId) :
            dataaccess.getStudentRequestByIds(schoolId, studentId));

        if (request === undefined) {
            res.sendStatus(404);
            return;
        }

        res.json(request);
    });

router.post('/',
    authenticate,
    authorize(features.StudentDashboard),
    async (req, res, next) => {
        try {
            const requestDto = req.body;
            const request = await dataaccess.createStudentRequest(requestDto);
            res.json(request);
        } catch (error) {
            next(error);
        }
    });

router.put('/:schoolId/:studentId',
    authenticate,
    authorize(features.StudentRequestAssessment, req => ({ schoolId: req.params.id })),
    async (req, res, next) => {
        const requestDto = req.body;
        const { schoolId, studentId } = req.params;
        const { accepted, rejected } = req.query;

        const schoolIdAsNumber = parseInt(schoolId, 10);
        const studentIdAsNumber = parseInt(studentId, 10);
        let request;
        try {
            if (accepted === undefined && rejected === undefined) {
                request = await dataaccess.updateStudentRequest(schoolIdAsNumber, studentIdAsNumber, requestDto);
            } else {
                if (accepted && !rejected) {
                    request = await dataaccess.acceptRequest(schoolId, studentId);
                }
                if (!accepted && rejected) {
                    request = await dataaccess.rejectRequest(schoolId, studentId);
                }
            }

            res.json(request);
        } catch (error) {
            next(error);
        }
    });

router.delete('/:schoolId/:studentId',
    authenticate,
    authorize(features.StudentRequestAssessment, req => ({ schoolId: req.params.id })),
    async (req, res, next) => {
        const { schoolId, studentId } = req.params;
        try {
            await dataaccess.deleteByIds(schoolId, studentId);
            res.json({
                deletedSchoolId: schoolId,
                deletedStudentId: studentId
            });
        } catch (error) {
            next(error);
        }
    });

module.exports = router;