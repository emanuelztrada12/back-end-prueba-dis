const { Form, Product } = require('../models');

const resolvers = {
  Query: {
    getInformation: async () => {
      try {
        const data = await Form.find({});
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  },

  Mutation: {
    newInformation: async (_, { input }) => {
      try {
        const data = new Form(input);
        const result = await data.save();
        return result;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers; 
