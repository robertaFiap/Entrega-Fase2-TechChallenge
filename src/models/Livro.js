import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true  },
    autor: { type: String},
    editora: { type: String }
    }, {versionKey: false });

const livro = mongoose.model("livro", livroSchema);

export default livro;