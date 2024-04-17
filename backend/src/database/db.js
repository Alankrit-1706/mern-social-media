const mongoose = require("mongoose")
const dotenv = require("dotenv")

// .env Configurations
dotenv.config();

const uri = "mongodb+srv://mafnan2018:sUv2Z3HPmWPeb7se@starter.rvg844a.mongodb.net/alank"

const connection = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Mongodb connection successful")
    })
    .catch((err) => {
        console.log(`MongoDb connection is not working! Error + ${err}`)
    })
}

module.exports = connection