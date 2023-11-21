import { authorize, listFiles } from "@/google";

export function Drive({files}){
    
    return (
    <div className="w-full my-3 flex flex-col bg-sky-300 min-h-[350px] rounded-lg shadow-lg shadow-sky-900">
        {files ? files.map(file=>(<span>{file.name}</span>)):(<span>Nada</span>)}
    </div>
    )
}

export const getStaticProps = (async (context)=>{
    const client = await authorize()
    const files = await listFiles(client)
    console.log(client)

    return {
        props: {files: Array.from(files)}
    }
})