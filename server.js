const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const expressip = require('express-ip');


//===ROUTE INCLUDE===
const RouteUser = require('./routes/user');
const RouteBlog = require('./routes/blog');
const RouterBlogCategory = require('./routes/blogcategory');
const RouteMenu = require('./routes/menu');
const RoutePage = require('./routes/page');
const GoogleNotification = require('./routes/googlenotification');

//===ROUTE INCLUDE===


//===DATABASE CONNECTION===
// mongoose.connect('mongodb+srv://biswanath:XRfrMdwCBrwr8lRm@qtonix.t42ay.mongodb.net/qtonixblog?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true});



mongoose.connect('mongodb+srv://mongodb:i6QpsrcM04zFhSKQ@cluster0.xeudb.mongodb.net/blogqtonix?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true});


const db = mongoose.connection;

db.on('error',(err)=>{
    console.log('Failed to connect.')
    console.log(err);
});
db.once('open',()=>{
    console.log('Successfully Connected.');
})
//===DATABASE CONNECTION===


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
app.use(expressip().getIpInfoMiddleware);


app.get('/',(req,res)=>{
    // res.send({hi:'I am biswanath'});
    res.send('<h1>Qtonix Blog</h1>');
    console.log(req.ipInfo)
    // res.render('pages/home');
});

// app.get('/ip',(req,res)=>{
//     res.send(req.ipInfo);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})


//API ROUTES
app.use('/api/user',RouteUser);
app.use('/api/blog',RouteBlog);
app.use('/api/blogcategory',RouterBlogCategory);
app.use('/api/menu',RouteMenu);
app.use('/api/page',RoutePage);
app.use('/api/googlenotification',GoogleNotification);

//API ROUTES





//GET IMAGES FROM DIR
app.use('/uploads/userimages/', express.static('uploads/userimages'));
app.use('/uploads/blogcategoryimages/', express.static('uploads/blogcategoryimages'));
app.use('/uploads/blogimages/', express.static('uploads/blogimages'));
