import mongoose from "mongoose";

//let mongooseConnectionConfig = {useNewUrlParser: true, useUnifiedTopology: true} 
//mongoose.connect('mongodb://localhost:27017/sharkAPI', mongooseConnectionConfig);
const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/sharkAPI'

mongoose.connect(url , mongooseConfig)



mongoose.set('strictQuery', true)

mongoose.connection.on('connected',() => console.log("Connected to Databaase"))
mongoose.connection.on('disconnected',() => console.log("NOT Connected to Database"))
mongoose.connection.on('error', error => console.error("Database Error", error))

export default mongoose.connection