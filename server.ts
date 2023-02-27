import { ApolloServer } from 'apollo-server';
import typeDefs from './src/graphql/schema';
import resolvers from './src/graphql/resolvers';


const PORT = 3000;
let server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(() => {
	console.log(`🚀 Server ready http://localhost:${PORT}`);
});
