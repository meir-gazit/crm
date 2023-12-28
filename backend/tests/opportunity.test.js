import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Opportunity API', () => {
	let opportunityId // Variable to store the ID of the created opportunity for later use in other tests

	it('should create a new opportunity', async () => {
		const newOpportunity = {
			// Provide data for creating a new opportunity
			name: 'New Business Deal',
			amount: 100000
			// ... other opportunity properties
		}

		const res = await chai
			.request(app)
			.post('/opportunity')
			.send(newOpportunity)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		opportunityId = res.body.id // Save the ID for later use
	})

	it('should get all opportunities', async () => {
		const res = await chai.request(app).get('/opportunity')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific opportunity by ID', async () => {
		const res = await chai.request(app).get(`/opportunity/${opportunityId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(opportunityId)
	})

	it('should update an opportunity', async () => {
		const updatedOpportunity = {
			// Provide data for updating the opportunity
			name: 'Updated Deal'
			// ... other updated opportunity properties
		}

		const res = await chai
			.request(app)
			.put(`/opportunity/${opportunityId}`)
			.send(updatedOpportunity)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete an opportunity', async () => {
		const res = await chai
			.request(app)
			.delete(`/opportunity/${opportunityId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
