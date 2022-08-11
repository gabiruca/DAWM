'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  receta.init({
    idReceta: DataTypes.INTEGER,
    nombreReceta: DataTypes.STRING,
    tiempoPreparacion: DataTypes.STRING,
    paisOrigen: DataTypes.STRING,
    categoria: DataTypes.STRING,
    dificultad: DataTypes.INTEGER,
    calificacion: DataTypes.DOUBLE,
    descripcion: DataTypes.STRING,
    fechaSubida: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'receta',
  });
  return receta;
};