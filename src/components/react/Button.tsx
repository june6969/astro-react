
import i18next from "@/i18n";
import { useTranslation } from "react-i18next";



interface Props{
  children: React.ReactNode,
  lang:string,
}

export default function({children,lang}:Props){
  
  i18next.changeLanguage(lang)
  const {t} = useTranslation();
  

  return <div className="w-10">
    <button onClick={()=>console.error("1111")}>{children} {t("home")}</button>
  </div>
}