
// import { useState } from "react";
import Counter from '@/components/counter/Counter';
import fs from 'fs';
import path from 'path'
export default async function Home() {
const filePath=path.join(process.cwd(),'next.config.mjs');
await fs.readFile(filePath,(err,data)=>{
  console.log(data.toString())
})
  return (
   <>
 <Counter/>  
   <div>
    hello world!
   </div>
   </>
  );
}
