const express = require('express');
const app = express();

const rutaUserValidation = require('./routes/userValidation');


const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// archivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

let contentType = 'text/html';
let filePath = "";

//Middleware
app.use((request, response, next) => {
    contentType = 'text/html';
    filePath = '';

    filePath = path.join(__dirname,'..',request.url);

    let extName = path.extname(request.url);

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    next();
});

app.use('/login', rutaUserValidation);


app.get('/', (request, response, next) => {
 
    response.render('lab14', {
        titulo: "",
        act1: "active",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("index");
    response.status(200);
});

app.use((request, response, next) => {
    response.render('Error404', {
        titulo: "",
        act1: "",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("404");
    response.status(404);
});

app.listen(3000, function(){
    console.log("server is running in port 3000");
  });