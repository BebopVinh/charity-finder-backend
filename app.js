const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

const fetch = require("node-fetch")

const sample = {
	greetings: "How are you?"
}

const { apiKey } = require("./config")

app.use(cors())

app.get("/", (req, res) => res.send(sample))

app.get("/organizations", (req, res) => {
	const url = `https://api.globalgiving.org/api/public/orgservice/all/organizations.json?api_key=${apiKey}`
	fetch(url)
		.then(response => response.json())
		.then(data => res.send(data))
})

app.listen(port, () => console.log(`Backend server is up on port ${port}`))
