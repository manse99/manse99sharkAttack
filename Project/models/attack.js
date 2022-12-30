import mongoose from "mongoose";

const Schema = mongoose.Schema;

let attackData = new Schema({
 datasetid: {
  type: String
 },
 recordid: {
  type: String
 },
 fields: {
  activity: {
   type: String
  },
  location: {
   type: String
  },
  sex: {
   type: String,
   enum: ["M", "F"]
  },
  year: {
   type: String
  },
  injury: {
   type: String
  },
  case_number: {
   type: String
  },
  time: {
   type: String
  },
  name: {
   type: String
  },
  age: {
   type: Number
  },
  species: {
   type: String
  },
  date: {
   type: String
  },
  type: {
   type: String
  },
  area: {
   type: String
  },
  country: {
   type: String
  },
  fatal_y_n: {
   type: String,
   enum: ["Y", "N", "Nq"]
  }
 }
});

export default mongoose.model("attacks", attackData);