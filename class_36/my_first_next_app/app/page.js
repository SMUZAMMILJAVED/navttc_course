//server component
'use client'

// import path from 'path'
// import fs from 'fs'
import Heading from "@/components/heading/Heading";
import Image from 'next/image';
export default function Home() {
//  await fs.readFile('package.json',(_,data)=>{
// console.log(data.toString())
//  })
  // console.log("test from home page")
  const handleClick=async()=>{
  let a= await fetch('/api/add',{method:'POST'})
 let resp=await a.json()
 console.log(resp)
  }
  return (
    <>
  <Heading/>
   <div>
    home page
   </div>
{/* <Image alt='car image' width={200} height={200} src={'https://static.vecteezy.com/system/resources/thumbnails/053/733/048/small/modern-car-captured-in-close-upgraphy-with-precision-and-innovation-free-photo.jpg'}/> */}
{/* <Image alt='car image' width={200} height={200} src={'https://i.pinimg.com/736x/10/66/46/1066461b5705cbd2a4a074dfa7df12e9.jpg'}/> */}
   <button onClick={handleClick}>click to hit api</button>
    </>
  );
}
