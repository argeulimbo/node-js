const express     = require('express');
const UserModel   = require('../src/models/user.model');
require('ejs');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use((request, response, next) => {
    console.log(`Request Type: ${request.method}`);
    console.log(`Content Type: ${request.headers["Content-Type"]}`);
    console.log(`Date: ${new Date()}`);
    next();    
});

// GET views Users
app.get('/views/users', async (request, response) => {
    try {
        const users = await UserModel.find({});
        response.render('index', { users });
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// PORTA config
const port = 9090;

// GET home
app.get('/home', (request, response) => {
    response.contentType('application/html');
    response.status(200).send('<h1>Hellow Send</h1>');
});
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));

// GET users
app.get('/users', async (request, response) => { 
    try {
        const users = await UserModel.find({});
        response.status(200).json(users)
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// GET userById
app.get('/users/:id', async (request, response) => {
    try{
        const id = request.params.id;
        const user = await UserModel.findById(id);
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).send(error.message);
    }
});

// POST user - Try/Catch
app.post('/users', async (request, response) => {
    try {
        const user = await UserModel.create(request.body);
        response.status(201).json(user);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

/* 
    PUT  - Atualizar por completo
    PATH - Atualizar apenas um elemento
*/

// PUT user
app.put('/users/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const user = await UserModel.findByIdAndUpdate(id, request.body, { new: true });
        response.status(200).json(user);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// PATH user
app.patch('/users/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const user = await UserModel.findByIdAndUpdate(id, request.body, { new: true });
        response.status(200).json(user);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

app.delete('/users/:id', async (request, response) => {
    try { 
        const id = request.params.id;
        const user = await UserModel.findByIdAndDelete(id);
        response.status(200).json(user);
    } catch (error) {
        response.status(500).send(error.message);
    }
})