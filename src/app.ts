import express from 'express'
import { StatusService } from './StatusService'

const app = express()
const port = 3000

app.get('/', (req, res) => {
	const service = new StatusService()
	res.send(service.run())
})

app.listen(port, () => {
	return console.log(`👾 listening at http://localhost:${port}`)
})
