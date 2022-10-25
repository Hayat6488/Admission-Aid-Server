const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const subjects = require('./data/subjects.json');

app.get('/', (req, res) => {
    res.send('server is on!!!');
})

app.listen(port, ()=>{
    console.log(`server running on port-${port}`);
})