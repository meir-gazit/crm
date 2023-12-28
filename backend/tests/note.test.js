import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Note API', () => {
	let noteId // Variable to store the ID of the created note for later use in other tests

	it('should create a new note', async () => {
		const newNote = {
			// Provide data for creating a new note
			content: 'This is a test note.'
			// ... other note properties
		}

		const res = await chai.request(app).post('/note').send(newNote)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		noteId = res.body.id // Save the ID for later use
	})

	it('should get all notes', async () => {
		const res = await chai.request(app).get('/note')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific note by ID', async () => {
		const res = await chai.request(app).get(`/note/${noteId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(noteId)
	})

	it('should update a note', async () => {
		const updatedNote = {
			// Provide data for updating the note
			content: 'Updated note content.'
			// ... other updated note properties
		}

		const res = await chai
			.request(app)
			.put(`/note/${noteId}`)
			.send(updatedNote)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete a note', async () => {
		const res = await chai.request(app).delete(`/note/${noteId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
