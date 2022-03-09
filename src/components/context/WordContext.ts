import { createContext } from "react";

interface Props{
    wordWin: string;
    setWordWin: React.Dispatch<React.SetStateAction<string>>;
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
    token:string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}
export const WordContext=createContext<Props>({
    setWordWin:()=>{},
    wordWin:'',
    auth:false,
    setAuth:()=>{},
    token:'',
    setToken:()=>{},
    currentTab:'',
    setCurrentTab:()=>{}
});