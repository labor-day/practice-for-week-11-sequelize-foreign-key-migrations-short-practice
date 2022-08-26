'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Musicians', 'bandId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Bands',
        key: 'id'
      },
      onDelete: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Musicians', 'bandId');
  }
};
