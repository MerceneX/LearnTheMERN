const mongose = require("mongoose"),
	Schema = mongose.Schema;

//Create Schema
const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Item = mongose.model("item", ItemSchema);
