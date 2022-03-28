const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())







app.listen(4040, console.log('port open on 4040'))