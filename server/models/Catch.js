const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let catchSchema = new Schema({
    fish: {type: String},
    weigth: {type: Number},
    length: {type: Number},
    municipality: {type: String},
    lake: {type: String},
    time: {type: Date},
    img: {data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model("catches", catchSchema)