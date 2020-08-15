const express = require("express")
const __ = console.log
let server = express()

server.get('/api', (req, res) => {
	__('Your API has been called')
	res.send({ message: 'Well done'})
})

server.listen(6969, () => {
	console.log('The API server has started in port 6969')
})