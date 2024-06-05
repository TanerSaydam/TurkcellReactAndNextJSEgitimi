import { getLanguage } from "../langs/languages";
import Navbar from "./navbar";

export default async function ServerNavbar({lang}){
    
    const language = await getLanguage(lang);

    return <Navbar lang={language}/>
}