const express = require('express')
const os = require('os')
const app = express()
const port = process.env.PORT || '3000'

let isHealthy = true
app.get('/', (req, res) => {
	isHealthy 
		? res.status(200).json({ hostname: os.hostname() }) 
		: res.status(500).send(`${os.hostname()} is down`)
})

app.get('/health/toggle', (req, res) => {
	isHealthy = !isHealthy
	res.status(200).json({
		is_healthy: isHealthy
	})
})

app.listen(port, (err) => {
	if (err) {
		throw(err)
	} else {
		console.log(`listening to port ${port}. press ctrl + c to cancel`)
	}
})