import mongoose,{Schema} from "mongoose";
import { Audio } from "three";
interface SIH {
    Username: string,
    Device_ID : string,
    DOB: string,
    Token: string,
    Refresh_Token:string,
    Password: string,


}
interface User_Data {
    User_name: string,

    SCREEN_shot_uri : string
}
const SIH_SCHEMA = new Schema<SIH>({

    Username: {type: String, required: true},
    Device_ID: {type: String, required: true},
    DOB: {type: String, required: true},
    Token: {type: String, require: true},
    Refresh_Token : {type:String, require: true},
    Password: {type: String, require: true},

})
interface imgSchema_ {
    Username: string,
    img : {
        data: {
            url: Array<string>},
        contentType: string,
    }
}
var imgSchema = new Schema<imgSchema_>({
    Username: {type:String, requried: true},
    img:
    {data: {
        url : {type: [String] , required: true},
    },
        contentType: {type: String, required: true}
}})
interface input_fieds {
    Username: string,
    data: Array<string>
}
var image = mongoose.model("images",imgSchema);
const input_fieds_schema = new Schema<input_fieds>({
    Username: {type: String, require: true},
    data: {type: [],required: true }
});
// const User_Data_Puzzle = new Schema<User_Data>({
//     User_name: {type: String, required: true},
//     SCREEN_shot_uri: {type: String, require: true}
// })
const input_fieds_schema_model = mongoose.model('input_fields', input_fieds_schema)
const SIH_MODEL = mongoose.model("users_", SIH_SCHEMA)

// const User_Data_Puzzle_model = mongoose.model('puzzel_',User_Data_Puzzle)

export {SIH_MODEL, image,input_fieds_schema_model}