var DataTypes = require("sequelize").DataTypes;
var _autores = require("./autores");
var _noticias = require("./noticias");
var _tipo_noticias = require("./tipo_noticias");
function initModels(sequelize) {
  var autores = _autores(sequelize, DataTypes);
  var noticias = _noticias(sequelize, DataTypes);
  var tipo_noticias = _tipo_noticias(sequelize, DataTypes);
  return {
    autores,
    noticias,
    tipo_noticias,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;