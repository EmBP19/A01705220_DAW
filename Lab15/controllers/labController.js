exports.useHome = (request, response, next) => {
    //filePath = path.join(__dirname,'..','views','lab14.html');
    //response.writeHead(200, {'Content-Type': contentType});
    //response.sendFile(filePath);
    response.render('lab14', {
        titulo: "Lab15",
        act1: "active",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("index");
    response.status(200);
};



exports.useNotFound = (request, response, next) => {
    response.render('Error404', {
        titulo: "Lab15",
        act1: "",
        act2: "",
        act3: "",
        act4: "",
    });
    console.log("404");
    response.status(404);
};
