const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://finchfoodadmin:banco123@finchfood.3hmva.mongodb.net/finchFood?retryWrites=true&w=majority'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e'
    }
}
module.exports = variables;