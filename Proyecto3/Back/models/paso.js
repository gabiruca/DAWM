const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paso', {
    idPaso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idReceta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'receta',
        key: 'idReceta'
      }
    },
    paso: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    especificacion: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPaso" },
        ]
      },
      {
        name: "idReceta",
        using: "BTREE",
        fields: [
          { name: "idReceta" },
        ]
      },
    ]
  });
};
