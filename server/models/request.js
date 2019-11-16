const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let peticionSchema = new Schema({
    req: {
        type: Schema.Types.Mixed
    }
});
module.exports = mongoose.model('request', peticionSchema);