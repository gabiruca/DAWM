'use strict';

const { stringify } = require("css");

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 1; i <=9; i++) {  
      await queryInterface.bulkInsert('Receta', [{  
        idReceta: i,  
        nombreReceta: 'Receta '+i,  
        tiempoPreparacion: i*10 +' minutos',  
        paisOrigen: 'País ejemplo',  
        categoria: 'Categoría ejemplo',
        dificultad: 1,
        calificacion: '4.'+i,
        descripcion:'Esta es una descripcion',
        fechaSubida: new Date()  
      }], {});  
   } 

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Receta', null, {});  
  }
};
