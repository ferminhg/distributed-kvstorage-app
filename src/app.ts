import express from 'express'
import { StatusService } from './application/StatusService'
import { SetService, SetServiceFactory } from './application/SetService'
import { GetServiceFactory } from './application/GetService'

const app = express()
const PORT = 3000

app.get('/health', (req, res) => {
	const service = new StatusService()
	res.send(service.run())
})

app.post('/set', (req, res) => {
	const { key, value } = req.query
	const service = SetServiceFactory.build()
	res.send(service.run(key as string, value as string))
})

app.get('/get', (req, res) => {
	const { key } = req.query
	const service = GetServiceFactory.build()
	res.send(service.run(key as string))
})

app.listen(PORT, () => {
	return console.log(`👾 listening at http://localhost:${PORT}`)
})
