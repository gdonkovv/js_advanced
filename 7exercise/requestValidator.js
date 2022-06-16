const { version } = require("chai");

function requestValidator(httpRequestObj) {

    // check if all properties are present
    if (httpRequestObj.hasOwnProperty("method") === false) {
        throw new Error("Invalid request header: Invalid Method");
    } else if (httpRequestObj.hasOwnProperty("uri") === false) {
        throw new Error("Invalid request header: Invalid URI");
    } else if (httpRequestObj.hasOwnProperty("version") === false) {
        throw new Error("Invalid request header: Invalid Version");
    } else if (httpRequestObj.hasOwnProperty("message") === false) {
        throw new Error("Invalid request header: Invalid Message");
    }

    // check if method is valid
    let possibleMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (possibleMethods.includes(httpRequestObj.method) === false) {
        throw new Error("Invalid request header: Invalid Method");
    }

    // check if uri is valid
    let pattern = /^[a-z0-9\.]+$/m;
    let match = pattern.test(httpRequestObj.uri);
    if (match === false) {
        throw new Error("Invalid request header: Invalid URI");
    }

    //check if version is valid
    let possibleVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (possibleVersions.includes(httpRequestObj.version) === false) {
        throw new Error("Invalid request header: Invalid Version");
    }

    // check if message is valid
    let msgPattern = /^[^\<\>\\\&\'\"]+$/m;
    let msgMatch = msgPattern.test(httpRequestObj.message);
    if (msgMatch === false && httpRequestObj.message !== "") {
        throw new Error("Invalid request header: Invalid Message");
    }

    // if all is valid, return the same object
    return httpRequestObj;

}
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));