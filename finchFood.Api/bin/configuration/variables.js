const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://finchfoodadmin:67Razoes@@finchfood.3hmva.mongodb.net/finchFood?retryWrites=true&w=majority'
    }
}
module.exports = variables;