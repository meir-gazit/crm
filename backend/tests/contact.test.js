import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Contact API', () => {
	let contactId // Variable to store the ID of the created contact for later use in other tests

	it('should create a new contact', async () => {
		const newContact = {
			// Provide data for creating a new contact
			name: 'John Doe',
			email: 'john.doe@example.com'
			// ... other contact properties
		}

		const res = await chai.request(app).post('/contact').send(newContact)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		contactId = res.body.id // Save the ID for later use
	})

	it('should get all contacts', async () => {
		const res = await chai.request(app).get('/contact')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific contact by ID', async () => {
		const res = await chai.request(app).get(`/contact/${contactId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(contactId)
	})

	it('should update a contact', async () => {
		const updatedContact = {
			// Provide data for updating the contact
			name: 'Updated Name'
			// ... other updated contact properties
		}

		const res = await chai
			.request(app)
			.put(`/contact/${contactId}`)
			.send(updatedContact)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete a contact', async () => {
		const res = await chai.request(app).delete(`/contact/${contactId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
