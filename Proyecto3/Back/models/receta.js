const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receta', {
    idReceta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreReceta: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    tiempoPreparacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    paisOrigen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    categoria: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    calificacion: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    fechaSubida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReceta" },
        ]
      },
    ]
  });
};
