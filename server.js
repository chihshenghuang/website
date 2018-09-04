const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))
const port = process.env.PORT || 3000

app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'))	
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})

module.exports = app
