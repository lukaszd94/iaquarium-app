//### Helper for rest api ###//

let Ok = function (res, returnedData, httpCode) {
    httpCode ? httpCode : 200;
    res.status(httpCode).json(returnedData);
};

let Err = function (res, errorMessage, errorsList, httpCode) {
    httpCode ? httpCode : 404;
    res
        .status(httpCode)
        .json({
            message: errorMessage,
            stack: errorsList
        });
};

module.exports = {
    Ok: Ok,
    Error: Err
};

