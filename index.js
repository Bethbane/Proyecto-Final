const express = require('express');
const app = express();

const hbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set("view engine", ".hbs")
app.set('view', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, "public")));

app.engine('.hbs', hbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('view'), 'layout'),
    partialDir: path.join(app.get('view'), 'partials'),
    extname: ".hbs"
})
)

app.get('/', (req, res)=>{
    res.send('Ruta de inicio de nuestro proyecto');
});

app.get('/photo', (req, res)=>{
    res.send('Ruta de galeria de nuestro proyecto');
});

app.get('/About', (req, res)=>{
    res.send('Ruta de nosotros de nuestro proyecto');
});

app.get('/Order', (req, res)=>{
    res.send('Ruta de ordenar de nuestro proyecto');
});

app.use ((req, res)=> {
    res.send ('404');
});

app.listen(PORT, ()=>{
console.log (`Server on http://localhost:${PORT}`);
})