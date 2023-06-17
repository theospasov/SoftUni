// This is a parser for the errors. For example, if we don't have the parser, an error from mongoose looks like `User validation failed: username: Username must be at least 3 characters`, but with the parser ` return Object.values(error.errors).map(v => v.message)` the error is `Username must be at least 3 characters`

 
function parseError(error) {
    
    if (error.name == 'ValidationError') { // if we have an error who's name is ValidationError we will know that this error comes from Mongoose, otherwise it came from our if-else statements 1:24:08
        return Object.values(error.errors).map(v => v.message)
    } else {
        return error.message.split('\n')
    }
}
// if the assignment wants more than one parser, we can add it here
module.exports = {
    parseError
}