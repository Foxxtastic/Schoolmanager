const isEqual = require('lodash.isequal');
const isString = require('lodash.isstring');

function hasFeature(requiredFeatureName, userFeatures, getParams, req) {
    const matchingFeatures = userFeatures.filter(_ => _.name === requiredFeatureName);
    if (matchingFeatures.length === 0) {
        console.log(`Feature '${requiredFeatureName}' is missing from user, available features `, userFeatures);
        return false;
    }

    if (getParams === undefined) {
        return true;
    }

    const requiredParams = getParams(req);

    const isMatchingWithParam = matchingFeatures.some(_ => isEqual(_.parameters, requiredParams));

    if (!isMatchingWithParam) {
        console.log(`User has access to feature '${requiredFeatureName}', but required parameter`, requiredParams, ' is not matching with ', matchingFeatures);
        return false;
    }

    return true;
}

function authorize(first, second) {

    if (!Array.isArray(first)) {
        const requiredFeatureName = first;
        const getParams = second;

        return (req, res, next) => {
            if (hasFeature(requiredFeatureName, req.user.features, getParams, req)) {
                next();
            } else {
                return res.sendStatus(401);
            }
        }

    } else {
        const requiredFeatures = first;
        return (req, res, next) => {
            let featureCheck = false;
            for (let i = 0; i < requiredFeatures.length; i++) {
                const requiredFeature = requiredFeatures[i];

                let requiredFeatureName;
                let getParams;
                if (isString(requiredFeature)) {
                    requiredFeatureName = requiredFeature;
                    getParams = undefined;
                } else {
                    requiredFeatureName = requiredFeature.name;
                    getParams = requiredFeature.getParams;
                }

                if (hasFeature(requiredFeatureName, req.user.features, getParams, req)) {
                    featureCheck = true;
                }
            }

            if (featureCheck) {
                next();
            } else {
                return res.sendStatus(401);
            }
        }
    }
};

module.exports = {
    authorize
};