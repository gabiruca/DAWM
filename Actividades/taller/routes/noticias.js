var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
function dicAuthor(){
    var dic = {}
    models.autores.findAll()
    .then(autores => {
        var i=0;
        for(let autor of autores){
            dic[autor.id] = autor["nombre"]
            i++;
        }
        console.log(dic);
        return dic;
    })
    .catch(console.log("Oops! Something went wrong"))
}
/* GET home page. */
router.get('/', function(req, res, next) {
    models.noticias.findAll({ 
        attributes: { exclude: ["id"] }
    })
    .then(noticias => {
        res.send(noticias)
    })
    .catch(error => res.status(400).send(error))
});
router.get('/:tipoId', function(req, res, next) {
    var dic = {}
    models.autores.findAll()
    .then(autores => {
        for(let autor of autores){
            dic[autor.id] = autor["nombre"]
        }

        models.noticias.findAll({ 
            attributes: { exclude: ["id"] },
            where: {
                id_tipo: req.params.tipoId
            }
        })
        .then(noticiasPerTipo => {
            var page;
            switch(req.params.tipoId){
                case "1":
                    page = "economia";
                    break;
                case "2":
                    page = "ecuador";
                    break;
                case "3":
                    page = "informes";
                    break;
                case "4":
                    page = "internacional";
                    break;
            }

            for(let noticia of noticiasPerTipo){     
                for(var i=0; i < Object.keys(dic).length; i++){
                    if(noticia.id_creator == i){
                        noticia.id_creator = dic[i]
                    }
                }
            }
            res.render(page, { title: 'Noticias :: ' + page, _newsType: noticiasPerTipo })
        })
        .catch(error => res.status(400).send(error))
    })
    
});
module.exports = router;
