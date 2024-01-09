const dotenv = require("dotenv") // retures an object 

dotenv.config() //  it loads .env variables into env variable

const envVariables = {
    PORT : process.env.PORT
}
module.exports = envVariables