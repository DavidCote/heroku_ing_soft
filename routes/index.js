var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'David', carrera: 'ico',
    actions:[{accion:"abrir"},
            {accion:"cerrar"},
            {accion:"No hacer nada"},
            {accion:"dormir"}
          ]
  });
});

router.get('/hola',(req,res,next)=>{
  res.render('home', {saludo:'hola mundo desde express handle bars'})
});

module.exports = router;
