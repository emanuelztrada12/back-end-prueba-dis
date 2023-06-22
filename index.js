const { ApolloServer } = require('apollo-server'); 
const {resolvers, typeDefs} = require('./src');
const { connection } = require('./config'); 

connection(); 
 
const server = new ApolloServer({
    resolvers,
    typeDefs
}); 

server.listen().then(( {url }) =>{
    console.log(`Servidor en la url ${url}`); 
})
