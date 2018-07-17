/* Importar o módulo do Framework Express */
var express = require('express');

/*Importar o módulo do consign */
var consign = require('consign');

/*Importar o módulo do body-parser */
var bodyParser = require('body-parser');

/*Importar o módulo do express-validator */
var expressValidator = require('express-validator');

/*Iniciar o objeto do express*/
var app = express();

/* Setar as variáveis  'view engine' e 'views' do express */

app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurar os Middleware express.static */
app.use(express.static('./app/public'));

/* Configurar os Middleware body-parser */
app.use(bodyParser.urlencoded({extended:true}));

/* Configurar o middleware express-validator */
app.use(expressValidator());


/* Configurar o consign que efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);


/*Exportar o objeto app */
module.exports = app;

