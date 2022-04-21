const cvResolvers = require('./cv');

module.exports={
    Query:{
        ...cvResolvers.Query
    },
    Mutation:{
        ...cvResolvers.Mutation
    }
};