import { createContext } from "react";

interface Props{
    wordWin: string;
    setWordWin: React.Dispatch<React.SetStateAction<string>>;
}
export const WordContext=createContext<Props>({
    setWordWin:()=>{},
    wordWin:''
});