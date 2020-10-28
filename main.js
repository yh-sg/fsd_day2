//load libaries
const express = require('express')
const handlebars = require('express-handlebars')

//configure the env
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;

//create an instance of express
const app = express(); //express returns a function, depend on the libaray

//configure handlebards
app.engine('hbs',handlebars({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

/***********Dynamic************/

const imageArray = ['dado-1','roll2','three_dots','four','Five-Image','dice-showing-6'] 
const roll_dice = () => Math.floor(Math.random()*6)

//access to css/images/etc.
app.use(express.static(__dirname + '/dice_images')) 
app.use(express.static(__dirname + '/public')) 

app.get(['/','/index.html'],(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.render('dice')
})

app.get('/roll',(req,res)=>{
    res.status(200)
    res.type('text/html')
    let randomImage = imageArray[roll_dice()];
    let randomImage2 = imageArray[roll_dice()];
    res.render('roll',{randomImage, randomImage2}) //key name and variable name are the same
})

app.use((req,res)=>{
    res.redirect('/')
})

/*********************************/

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`);
})