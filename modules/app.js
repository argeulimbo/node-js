const express = require('express');
const app = express();
const port = 9090;

// GET home
app.get('/home', (request, response) => {
    response.contentType('application/html');
    response.status(200).send('<h1>Hellow Send</h1>');
});
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));

// GET users
app.get('/users', (request, response) => {
    const users = [
        {
            name: 'John Doe',
            email: 'john@doe.com'
        },
        {
            name: 'Karina Doe',
            email: 'karina@doe.com'
        }
    ];
    response.status(200).json(users);
})