const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://durga:durga_123@cluster0.ppkiq.mongodb.net/agodaAuthentication?retryWrites=true&w=majority"
    )
}

module.exports = connect