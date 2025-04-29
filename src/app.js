import { ApolloServer, gql } from 'apollo-server';


const server = new ApolloServer({
    typeDefs: gql`
        type Query{
            hello: String
            name: String
        }`,
    resolvers: {
        Query: {
            hello: () => 'Hello world!',
            name: () => 'My name is Romulo',
        },
    },
});

server.listen(4003).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
