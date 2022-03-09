import axios from "axios";
import { enviroment } from "../config/environment";
import { authGuard } from "./authentication.guard";
export const getWordsPlayed = (email: string, token: string) => {

    return axios.get(`${enviroment.apiUrl}/words_played`,
    authGuard(email, token))
        .then((response: any) => response.data);
}