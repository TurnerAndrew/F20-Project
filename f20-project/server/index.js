const express = require('express')
const cors = require('cors')
const listCtrl = require('./controllers/listController')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/list', listCtrl.getList)
app.post('/api/list', listCtrl.addItem)





app.listen(4040, console.log('port open on 4040'))