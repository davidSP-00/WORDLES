import axios, { AxiosRequestConfig } from "axios";
import { enviroment } from "../config/environment";
import { User } from "../models/model";
export const register=(user:User)=>{

   return  axios.post(`${enviroment.apiUrl}/register`,{
         name:user.name,
         email:user.email,
         password:user.password,
   })
   .then((response:any) => response.data);
}

export const login=(user:User)=>{
    


   return  axios.post(`${enviroment.apiUrl}/authenticate`,{
         username:user.email,
         password:user.password,
   })
   .then((response:any) => response.data);
}