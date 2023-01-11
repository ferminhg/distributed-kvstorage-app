import express from 'express'
import { StatusService } from './application/StatusService'
import { SetService } from './application/SetService'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
	const service = new StatusService()
	res.send(service.run())
})

app.post('/set', (req, res) => {
	const { key, value } = req.query
	const service = new SetService()
	res.send(service.run(key as string, value as string))
})

app.listen(PORT, () => {
	return console.log(`👾 listening at http://localhost:${PORT}`)
})
