const {graphql, buildSchema, graphqlSync} = require('graphql')

const schema = buildSchema(`
        type Query{
            hello: String
        }
`)

const rootValue = { hello: () => 'Hello World!'}

const source =  `{hello}`

const response = async () => await graphql({schema,source,rootValue})

console.log(response)