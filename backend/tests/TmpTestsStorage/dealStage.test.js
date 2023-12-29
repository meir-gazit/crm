import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('DealStage API', () => {
	let dealStageId // Variable to store the ID of the created deal stage for later use in other tests

	it('should create a new deal stage', async () => {
		const newDealStage = {
			// Provide data for creating a new deal stage
			name: 'Prospecting',
			description: 'Identifying potential leads'
			// ... other deal stage properties
		}

		const res = await chai
			.request(app)
			.post('/dealStage')
			.send(newDealStage)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		dealStageId = res.body.id // Save the ID for later use
	})

	it('should get all deal stages', async () => {
		const res = await chai.request(app).get('/dealStage')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific deal stage by ID', async () => {
		const res = await chai.request(app).get(`/dealStage/${dealStageId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(dealStageId)
	})

	it('should update a deal stage', async () => {
		const updatedDealStage = {
			// Provide data for updating the deal stage
			name: 'Updated Stage'
			// ... other updated deal stage properties
		}

		const res = await chai
			.request(app)
			.put(`/dealStage/${dealStageId}`)
			.send(updatedDealStage)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete a deal stage', async () => {
		const res = await chai.request(app).delete(`/dealStage/${dealStageId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
