const express = require('express');
const app = express();
app.use(express.json());

//Array of restaurants
const restaurants =[
    {name: 'KFC', type: "Fast Food"},
    {name: "McDonald", type: "Fast food"},
    {name: 'Ginsoy', type: "Chinese"},
    {name: 'China Grill', type: "Chinese"},
    {name: 'PizzaOne', type: "Italian"},
    {name: 'PastaTwo', type: "Italian"}
]

//Array of restaurants Menu
const menu =[
    {name: 'KFC', type: "Fast Food",
    Deal: "2 Zinger Burger , 1 Drink = Rs. 530/",
    Triple_Treat: "3 Krunch Burgers + 3 Reg Drinks",
    Family_Bucket: "9pc Chicken + 2 Drinks"
},
    {name: "McDonald", type: "Fast food",
    Deal_1: "4 piece Chicken McNuggets",
    Deal_2: "Big Mac",
    Deal_3: "World Famous Fries",
    Deal_4: "Sausage, Egg & Cheese McGriddles",
    Deal_5: "Southwest Grilled Chicken Salad",
    Deal_6: "Egg McMuffin",
    Deal_7: "Mocha Frappé",
    Deal_8: "Classic Chicken Sandwich"

},
    {name: 'Ginsoy', type: "Chinese"},
    {name: 'China Grill', type: "Chinese"},
    {name: 'PizzaOne', type: "Italian"},
    {name: 'PastaTwo', type: "Italian"}
]



//GET:
//Routes
app.get('/', (req,res)=> {
    res.send("Login Page")
});


app.get('/home', (req,res)=> {
    res.send("Home Page - FOOD COURT APP")
});


app.get('/restaurants', (req,res)=> {
    res.send(restaurants)
    
});

//Get a particular restaurant 
app.get('/restaurants/:name', (req,res)=> {
    const result = restaurants.find(r => r.name === req.params.name);

    res.send(result)
  
});

//Get a particular restaurant menu
app.get('/menu/:name', (req,res)=> {
    const result_m = menu.find(m => m.name === req.params.name);

    res.send(result_m)
});



//POST:
app.post('/restaurants', (req,res)=> {
    const temp= {
        name: req.body.name,
        type: req.body.type
    };
    restaurants.push(temp);
    res.send(restaurants);
});


/*//PUT
app.put('/restaurants/:name', (req,res)=> {
    const result = restaurants.find(r => r.name === req.params.name);
   type: req.body.type;
    res.send(result);
});
*/


app.listen(3009);