import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Event API', () => {
	let eventId // Variable to store the ID of the created event for later use in other tests

	it('should create a new event', async () => {
		const newEvent = {
			// Provide data for creating a new event
			title: 'Client Meeting',
			date: '2023-01-01'
			// ... other event properties
		}

		const res = await chai.request(app).post('/event').send(newEvent)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		eventId = res.body.id // Save the ID for later use
	})

	it('should get all events', async () => {
		const res = await chai.request(app).get('/event')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific event by ID', async () => {
		const res = await chai.request(app).get(`/event/${eventId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(eventId)
	})

	it('should update an event', async () => {
		const updatedEvent = {
			// Provide data for updating the event
			title: 'Updated Meeting'
			// ... other updated event properties
		}

		const res = await chai
			.request(app)
			.put(`/event/${eventId}`)
			.send(updatedEvent)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete an event', async () => {
		const res = await chai.request(app).delete(`/event/${eventId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
