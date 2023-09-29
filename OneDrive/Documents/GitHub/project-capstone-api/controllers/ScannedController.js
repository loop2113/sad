const formidable = require('formidable')
const fs = require("fs")
const path = require("path")
const DB = require("../models")

/**
 * Get resources
 */
exports.index = async function(req, res){
    let data = await DB.scanned.find().lean();

    for (var i = data.length - 1; i >= 0; i--) {
        data[i]['link'] = `${req.protocol}://${req.get('host')}/scanned/${ data[i]['file'] }`
    }

    res.send(data)
}

/**
 * Create resource
 */
exports.store = async function(req, res){
    let data = await DB.scanned(req.body)
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
    let data = await DB.scanned.find({
        _id: req.params.id
    })
    res.send(data)
}

/**
 * Update resource
 * @param id: string
 */
exports.update = async function(req, res){
    let data = await DB.scanned.updateOne({
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
    await DB.scanned.deleteOne({
        _id: req.params.id
    })

    res.send({
        status: true,
        message: "Data deleted"
    })
}

/**
 * Upload the scanned document
 */
exports.upload = async function(req, res){
    const form = formidable({ multiples: true })

    const data = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            const newFilePath = path.join("public", "scanned", files.image.originalFilename);
            fs.rename(files.image.filepath, newFilePath, (err) => {
                console.log( err )
            });

            resolve({ status: true });
        })
    })

    return res.send({
        status: true,
        message: "File uploaded"
    });
}