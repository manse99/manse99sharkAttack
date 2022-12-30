import axios from "axios";
import db from ".././connection.js"
import Attack from "../models/attack.js"

const seedData = async ()=>{
 const response = await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack&q=&facet=date&facet=type&facet=country&facet=area&facet=activity&facet=sex&facet=age&facet=fatal_y_n&facet=time&facet=species")

 await db.dropDatabase()
 await Attack.create(response.data.records)

 db.close()
}

seedData()


//  const scrubbedData = response.data.records.map((data)=>{
//   return {
//     category: data.dataSetId,
//     recordId: data.recordid,
//     fields: {
//      activity: data.fields.activity,
//      location: data.fields.location,
//      sex: data.fields.sex.toLowerCase() === "m" ? "male" : "female",
//      year: ,
//      injury: ,
//      caseNumber: ,
//      time: ,
//      name: ,
//      age: ,
//     }
//   }
//  }