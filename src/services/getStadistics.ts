import axios from "axios";
import { enviroment } from "../config/environment";
import { authGuard } from "./authentication.guard";

export const getStadistics=(email: string, token: string)=>{
/* https://mocki.io/v1/bfe9d29a-7e80-4b6b-b3a9-251ec0a58b86 */
   
   return  axios.get(`${enviroment.apiUrl}/stadistics`,
   authGuard(email, token))
   .then((response:any) => response.data);
}