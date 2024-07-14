import "dotenv/config"
import mongoose, {mongo} from "mongoose";
 
//console.log ("uri:" + uri);
async function conectaNaDataBase () {
 //   console.log ("conexao: " + process.env.DB_CONNECTION_STRING);
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDataBase;


