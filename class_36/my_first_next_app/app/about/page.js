// 'use client'
import Script from 'next/script'
// import React, { useEffect } from 'react'

const page = () => {
//     useEffect(()=>{
// alert("about page")
//     },[])
  return (
  <>
    <Script >
{`alert("this is about page!")`}
        
    </Script>
    <div>
      about page
    </div>
  </>
  )
}

export default page
