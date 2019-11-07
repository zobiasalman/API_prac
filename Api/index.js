const express = require('express');
const app = express();
app.use(express.json());

const venues = [
    {id: 1, name: 'venue1'},
    {id: 2, name: 'venue2'},
    {id: 3, name: 'venue3'},
    {id: 4, name: 'venue4'}
];
app.get('/api/venues',(req,res) => {
res.send(venues);
});

app.post('/api/venues', (req, res) =>{
    const temp = {id: req.body.id, name: req.body.name};
    venues.push(temp); //replace with db insert query
    res.send(venues);
});
app.delete('/api/venues/:num', (req, res) =>{
    venues[req.params.num] = null;
    res.send(venues);
});

app.put('/api/venues/:name', (req, res) =>{
    const result = venues.find(c => c.name === req.params.name);
    result.id = req.body.id;
    res.send(result);
});

app.listen(3001, ()=> {console.log("server started on port 3001")});