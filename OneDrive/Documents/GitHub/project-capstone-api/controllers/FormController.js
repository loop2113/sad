const DB = require("../models")

/**
 * Get resources
 */
exports.index = async function(req, res){
	let data = await DB.form.find();
	res.send(data)
}

/**
 * Create resource
 */
exports.store = async function(req, res){
    let data = await DB.form(req.body)
    await data.save(data);

	res.send({
        status: true,
        message: "Data inserted",
        data: data
    })
}

/**
 * Get resource
 * @param id: string
 */
exports.get = async function(req, res){
    let data = await DB.form.find({
        _id: req.params.id
    })
	res.send(data)
}

/**
 * Update resource
 * @param id: string
 */
exports.update = async function(req, res){
    let data = await DB.form.updateOne({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        upsert: true
    });

	res.send({
        status: true,
        message: "Data updated"
    })
}

/**
 * Delete resource
 * @param id: string
 */
exports.delete = async function(req, res){
    await DB.form.deleteOne({
        _id: req.params.id
    })

	res.send({
        status: true,
        message: "Data deleted"
    })
}