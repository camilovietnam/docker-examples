const express = require("express")
const request = require("request")

const __ = console.log
let server = express()

server.get('/', (req, res) => {
	__('Your WEB SERVER has been called')
	
	request.get('http://microweb_api:6969/api', (err, res, body) => {
		if (!err) {
			__('Successful call to remote API', body)
			return
		}

		__('Error calling the API', err)
	})

	res.send(`<h1>Welcome to your website</h1><p></p>`)
})

server.listen(6970, () => {
	__('The WEB server has started in port 6969')
})