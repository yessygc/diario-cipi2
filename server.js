const express = require('express');
const app = express();
const notaRouter = express.Router();
const categoriaRouter = express.Router();
const adminRouter = express.Router();

//RUTAS PARA LAS NOTAS 
notaRouter.get('/', (req, res) => {
    res.send('Hello from nota router');
});

//RUTAS PARA LAS CATEGORIAS
categoriaRouter.get('/', (req, res) => {
    res.send('Hello from categoria router');
});

//RUTAS PARA EL ADMINISTRADOR
adminRouter.get('/', (req, res) => {
    res.send('Hello from admin router');
});

app.use('/nota', notaRouter);
app.use('/categoria', categoriaRouter);
app.use('/admin', adminRouter);

app.listen(3003, () => {
    console.log('server listen on port', 3003)
});

// {}