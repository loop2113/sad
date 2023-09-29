module.exports = (mongoose) => {

    // Schema
    const schema = _schema(mongoose)

    // Model
    const Scanned = mongoose.model("scanned", schema);

    // Model functions
    // ...
    
    return Scanned;
};

/**
 * Create schema
 */
function _schema(mongoose){
    return mongoose.Schema({
        file: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    });
}