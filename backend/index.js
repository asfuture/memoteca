// const express = require('express');
// const bdjson = require('./db.json');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// let usuarios = bdjson ;

// app.post('/', (req, res) => {
//   const { email, senha } = req.body;

//   // Verificar se já existe um usuário com o mesmo email e senha
//   const usuarioExistente = usuarios.find(u => u.email === email && u.senha === senha);

//   if (usuarioExistente) {
//     res.json(usuarioExistente);
//   } else {
//     // Se não houver, criar um novo usuário
//     const novoUsuario = {
//       email: email,
//       senha: senha,
//       id: usuarios.length + 1
//     };
//     usuarios.push(novoUsuario);
//     res.json(novoUsuario);
//   }
// });

// app.listen(8090, () => {
//   console.log('Servidor rodando na porta 8080');
// });
