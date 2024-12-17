const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/",(req,res)=>{
    res.render("home.ejs");
})


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);

});


