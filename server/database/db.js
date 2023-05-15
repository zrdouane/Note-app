const mongoose = require("mongoose");
// set the flag to false if you want to override the current strictQuery
mongoose.set('strictQuery', false);
const connectDB = async() => {
    try{
		const con = await mongoose.connect(process.env.MONGODB_URI)
		console.log(`Database Connected: ${con.connection.host}`);
	} catch (error) {
		console.log(error);
	}
}

module.exports = connectDB;