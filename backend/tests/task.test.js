import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../your/app' // Import your Express app

chai.use(chaiHttp)
const expect = chai.expect

describe('Task API', () => {
	let taskId // Variable to store the ID of the created task for later use in other tests

	it('should create a new task', async () => {
		const newTask = {
			// Provide data for creating a new task
			title: 'Complete Project A',
			dueDate: '2023-02-28'
			// ... other task properties
		}

		const res = await chai.request(app).post('/task').send(newTask)

		expect(res).to.have.status(201)
		expect(res.body).to.be.an('object')
		expect(res.body).to.have.property('id')
		taskId = res.body.id // Save the ID for later use
	})

	it('should get all tasks', async () => {
		const res = await chai.request(app).get('/task')

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('array')
	})

	it('should get a specific task by ID', async () => {
		const res = await chai.request(app).get(`/task/${taskId}`)

		expect(res).to.have.status(200)
		expect(res.body).to.be.an('object')
		expect(res.body.id).to.equal(taskId)
	})

	it('should update a task', async () => {
		const updatedTask = {
			// Provide data for updating the task
			title: 'Updated Project A'
			// ... other updated task properties
		}

		const res = await chai
			.request(app)
			.put(`/task/${taskId}`)
			.send(updatedTask)

		expect(res).to.have.status(200)
		// Optionally, add more assertions based on your update logic
	})

	it('should delete a task', async () => {
		const res = await chai.request(app).delete(`/task/${taskId}`)

		expect(res).to.have.status(204)
	})

	// Add more test cases as needed for your specific requirements
})

export default {} // Export an empty object or any relevant exports needed for the test
