module.exports = (mongoose) => {

    // Schema
    const schema = _schema(mongoose)

    // Model
    const Form = mongoose.model("forms", schema);

    // Model functions
    // ...
    
    return Form;
};

/**
 * Create schema
 */
function _schema(mongoose){
    return mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        form: {
            type: String,
            required: true
        },
        fields: {
            type: Object,
            required: true
        }
    }, {
        timestamps: true
    });
}