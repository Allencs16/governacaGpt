import mongoose from "mongoose";

const gptResponseSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  question: {type: String},
  response: {type: String}
})

const gptResponseModel = mongoose.model("gptResponseModel", gptResponseSchema);

export default gptResponseModel;