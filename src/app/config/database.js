import mongoose from 'mongoose'

const connectDB = async () => {
	// if (mongoose.connection[0].readyState){
	// 	return true
	// }

	try {
		await mongoose.connect(process.env.MONGODB_URI)
		return true;
	} catch (error) {
		console.log(error);
		
	}
}

export default connectDB;
