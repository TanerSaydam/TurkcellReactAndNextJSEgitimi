import { getLanguage } from "../langs/languages";

export default async function Home({params}) {
  const lang = await getLanguage(params.lang);

  return (
    <>    
    <h1 className="alert alert-success">{lang.home.main}</h1>
    </>
  );
}
