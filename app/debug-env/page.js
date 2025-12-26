import { notFound } from 'next/navigation';


export default function  DebugEnvPage()  {
    //If it is a deployed app, we throw a 404 error
    if (process.env.NODE_ENV === "production") notFound();

    const hasUrl = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
    const haskEY = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    return (
        <div className="container">
            <h1>Env Check</h1>
            <p> URL Loaded: {String(hasUrl)}</p>
            <p> Anon Key Loaded: {String(haskEY)}</p>
        </div>
    )
}


