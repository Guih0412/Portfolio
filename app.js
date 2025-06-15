const express = require('express');
const path = require('path');
const browserSync = require('browser-sync');

const app = express();

// Arquivos estáticos
app.use(express.static('public'));

// Configura EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => res.render('index'));
app.get('/projetos', (req, res) => res.render('projetos'));

// Inicia o servidor
const server = app.listen(3000, () => {
  console.log('Servidor na porta 3000');

  // BrowserSync
  browserSync.init({
    proxy: 'http://localhost:3000',
    files: ['views/**/*.ejs', 'public/**/*.*'],
    port: 3001,
    open: false,
    notify: false
  });
});
