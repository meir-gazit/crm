// errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
	console.error(err.stack)
  
	// Check for specific error conditions and set appropriate status codes
	if (err instanceof SyntaxError) {
	  res.status(400).json({ error: 'Invalid JSON syntax' }) // Bad Request
	} else if (err instanceof YourValidationClass) {
	  res.status(422).json({ error: err.message }) // Unprocessable Entity (Validation Error)
	} else if (err instanceof YourNotFoundError) {
	  res.status(404).json({ error: 'Resource not found' }) // Not Found
	} else if (err instanceof YourUnauthorizedError) {
	  res.status(401).json({ error: 'Unauthorized' }) // Unauthorized
	} else if (err instanceof YourForbiddenError) {
	  res.status(403).json({ error: 'Forbidden' }) // Forbidden
	} else if (err instanceof YourMethodNotAllowedError) {
	  res.status(405).json({ error: 'Method Not Allowed' }) // Method Not Allowed
	} else if (err instanceof YourConflictError) {
	  res.status(409).json({ error: 'Conflict' }) // Conflict
	} else if (err instanceof YourGoneError) {
	  res.status(410).json({ error: 'Resource Gone' }) // Gone
	} else if (err instanceof YourInternalServerError) {
	  res.status(500).json({ error: 'Internal Server Error' }) // Internal Server Error
	} else if (err instanceof YourNotImplementedError) {
	  res.status(501).json({ error: 'Not Implemented' }) // Not Implemented
	} else if (err instanceof YourBadGatewayError) {
	  res.status(502).json({ error: 'Bad Gateway' }) // Bad Gateway
	} else if (err instanceof YourServiceUnavailableError) {
	  res.status(503).json({ error: 'Service Unavailable' }) // Service Unavailable
	} else if (err instanceof YourGatewayTimeoutError) {
	  res.status(504).json({ error: 'Gateway Timeout' }) // Gateway Timeout
	} else if (err instanceof YourHTTPVersionNotSupportedError) {
	  res.status(505).json({ error: 'HTTP Version Not Supported' }) // HTTP Version Not Supported
	} else {
	  res.status(500).json({ error: 'Something went wrong!' }) // Default to Internal Server Error
	}
  }
  
  module.exports = errorMiddleware
  