import axios from "axios";

export const getWordDay=()=>{


   return  axios.get('https://mocki.io/v1/bfe9d29a-7e80-4b6b-b3a9-251ec0a58b86')
   .then((response:any) => response.data.wordDay);
}