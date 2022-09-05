const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingrediente', {
    idIng: {
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
    nombreIngrediente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingrediente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idIng" },
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
