const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());

const subjects = require('./data/subjects.json');

app.get('/', (req, res) => {
    res.send('server is on!!!');
})

app.get('/subjects', (req, res) => {
    res.send(subjects);
})

app.get('/subjects/:id', (req, res)=> {
    const id = req.params.id;
    const subject = subjects.find(sub => sub.id===id);
    res.send(subject)
})

app.listen(port, ()=>{
    console.log(`server running on port-${port}`);
})