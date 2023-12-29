import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Lead API', () => {
	let leadId // Variable to store the ID of the created lead for later use in other tests

	it('should create a new lead', async () => {
		const newLead = {
			// Provide data for creating a new lead
			name: 'John Doe',
			email: 'john.doe@example.com'
			// ... other lead properties
		}

		const res = await chai.request(app).post('/lead').send(newLead)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		leadId = res.body.id // Save the ID for later use
	})

	it('should get all leads', async () => {
		const res = await chai.request(app).get('/lead')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific lead by ID', async () => {
		const res = await chai.request(app).get(`/lead/${leadId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(leadId)
	})

	it('should update a lead', async () => {
		const updatedLead = {
			// Provide data for updating the lead
			name: 'Updated Name'
			// ... other updated lead properties
		}

		const res = await chai
			.request(app)
			.put(`/lead/${leadId}`)
			.send(updatedLead)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete a lead', async () => {
		const res = await chai.request(app).delete(`/lead/${leadId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
