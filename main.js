//load libaries
const express = require('express')
const hbs = require('express-handlebars')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;

//create an instance of express
const app = express(); //express returns a function, depend on the libaray

//configure handlebards
app.engine('hbs',hbs({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

/***********Statics way************/
// app.use(express.static(__dirname + '/static'))

// app.get('/roll',(req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(__dirname + '/static/roll.html')
// })

// app.use((req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(__dirname + '/static/dice.html')
// })

/*********************************/
//
/***********Dynamic way************/

app.use((req,res)=>{
    res.status(200)
    res.type('text/html')
    res.render('dice',{})
})

/*********************************/

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
})