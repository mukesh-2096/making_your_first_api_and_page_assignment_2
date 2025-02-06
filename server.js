const express = require('express');
const app = express();

// Define status codes and their corresponding messages
const statusCodes = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled, resulting in the creation of a new resource.",
    204: "No Content: The server successfully processed the request, but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: Authentication is required to access the resource.",
    403: "Forbidden: The server refuses to authorize the request.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The HTTP method used is not supported by the resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time (rate limiting).",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.",
    504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

// Create GET endpoint for /status-info
app.get('/status-info', (req, res) => {
    const statusCode = parseInt(req.query.code);

    if (statusCodes[statusCode]) {
        res.json({
            status: statusCode,
            message: statusCodes[statusCode]
        });
    } else {
        res.status(400).json({
            status: 400,
            message: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
