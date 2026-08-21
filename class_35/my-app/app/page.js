

import fs from 'fs';
import path from 'path'
import Counter from "@/components/counter/Counter";
export default async function Home() {
  await fs.readFile(path.join(process.cwd(),'package.json'),(_,fileData)=>{
console.log(fileData.toString())
   })

  return (
  <>
 
  <h1 className="min-h-[80vh] bg-pink-400">Home page</h1>
<Counter/>
  </>
  );
}
