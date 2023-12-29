import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Meeting API', () => {
	let meetingId // Variable to store the ID of the created meeting for later use in other tests

	it('should create a new meeting', async () => {
		const newMeeting = {
			// Provide data for creating a new meeting
			title: 'Quarterly Review',
			date: '2023-04-01'
			// ... other meeting properties
		}

		const res = await chai.request(app).post('/meeting').send(newMeeting)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		meetingId = res.body.id // Save the ID for later use
	})

	it('should get all meetings', async () => {
		const res = await chai.request(app).get('/meeting')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific meeting by ID', async () => {
		const res = await chai.request(app).get(`/meeting/${meetingId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(meetingId)
	})

	it('should update a meeting', async () => {
		const updatedMeeting = {
			// Provide data for updating the meeting
			title: 'Updated Review'
			// ... other updated meeting properties
		}

		const res = await chai
			.request(app)
			.put(`/meeting/${meetingId}`)
			.send(updatedMeeting)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete a meeting', async () => {
		const res = await chai.request(app).delete(`/meeting/${meetingId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
