'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('receta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idReceta: {
        type: Sequelize.INTEGER
      },
      nombreReceta: {
        type: Sequelize.STRING
      },
      tiempoPreparacion: {
        type: Sequelize.STRING
      },
      paisOrigen: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      dificultad: {
        type: Sequelize.INTEGER
      },
      calificacion: {
        type: Sequelize.DOUBLE
      },
      descripcion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('receta');
  }
};