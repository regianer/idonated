const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) =>{
    res.send('<h1>Home</h1>')
})
app.get('/contato', (req, res) => {
    res.send(`<h1>Contato</h1>
    <form action="/contato" method="POST">
        <label for="email">Email:</label>
        <textarea name="mensagem" id="mensagem">
        </textarea>
        <input type="submit" value="Enviar"/>
     </form>`)
})
app.post('/contato', (req, res) => {
    res.send('<h1> Precisamos aprender a pegar os valores que o usuário digitou!</h1>')
})
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:${port}')
    console.log('Para derrubar o servidor: ctrl + c');
})