const { gql } = require("apollo-server");

const typeDefs = gql`
    type information {
        id: ID
        name: String
        lastname: String
        email: String
        birthday: String
        servicesProduct: String
        mount: Float
    }

    input InformationInput {
        name: String!
        lastname: String!
        email: String!
        birthday: String!
        servicesProduct: String
        mount: Float
    }

    type Query {
        getInformation: information
    }

    type Mutation {
        newInformation(input: InformationInput): information
    }
`; 


module.exports = typeDefs;