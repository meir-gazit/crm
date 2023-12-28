import jwt from 'jsonwebtoken'

// Authentication Middleware function
const authMiddleware = (req, res, next) => {
	// Check if the application is running in the 'development' environment
	if (process.env.NODE_ENV === 'development') {
		// Respond with a JSON message indicating the development environment
		res.status(200).json({
			message: 'development environment, keep on moving'
		})
		// Call the next middleware in the chain or the route handler
		next()
	} else {
		// Extract the authorization token from the request headers
		const token = req.headers.authorization

		// Check if the authorization token is missing
		if (!token) {
			// Respond with a 401 status and a JSON error message for a missing token
			return res
				.status(401)
				.json({ error: 'Unauthorized: Missing token' })
		}

		// Verify the authorization token using the provided secret key
		jwt.verify(token, 'your_secret_key', (err, decoded) => {
			// Check if the token verification fails
			if (err) {
				// Respond with a 401 status and a JSON error message for an invalid token
				return res
					.status(401)
					.json({ error: 'Unauthorized: Invalid token' })
			}

			// If the token is valid, set the decoded user ID in the request object
			req.userId = decoded.userId
			// Call the next middleware in the chain or the route handler
			next()
		})
	}
}

// Export the authentication middleware for use in other parts of the application
export default authMiddleware
