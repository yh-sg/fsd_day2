//load libaries
const express = require('express')
const handlebars = require('express-handlebars')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;

//create an instance of express
const app = express(); //express returns a function, depend on the libaray

//configure handlebards
app.engine('hbs',handlebars({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

/***********Dynamic************/
app.use(express.static(__dirname + '/dice_images')) //load the image files, next time use public in order to access css/images/etc.

const imageArray = ['dado-1','roll2','three_dots','four','Five-Image','dice-showing-6'] 
let randomImage = imageArray[Math.floor(Math.random()*6)];
let randomImage2 = imageArray[Math.floor(Math.random()*6)];

app.get('/roll',(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.render('roll',{ranImage: randomImage, ranImage2: randomImage2})
})

app.use((req,res)=>{
    res.status(200)
    res.type('text/html')
    res.render('dice')
})

/*********************************/

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
})