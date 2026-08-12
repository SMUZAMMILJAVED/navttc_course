const fs=require('fs');
const path=require('path');
const bcrypt=require('bcrypt');
const filePath=path.join(process.cwd(),'data','users.json')
const readData=()=>{
return new Promise((resolve,reject)=>{
fs.readFile(filePath,(err,data)=>{
if(err){
    reject()
}else{
    resolve(JSON.parse(data.toString()))//binary raw (buffer)
}
  })  
  })
}
const writeData=(data)=>{
return new Promise((resolve,reject)=>{
fs.writeFile(filePath,JSON.stringify(data),(err)=>{
    if(err){
        reject()
    }else{
        resolve()
    }
})
})
}

exports.createUser=async(email,password,uid)=>{
 try {
     const users=  await readData();

const matched= users.find(u=>u.email===email);
if(matched){
    throw new Error ("User Already Exists!")
}else{
    const hashedPass= await bcrypt.hash(password,12)
await writeData([...users,{email,password:hashedPass,uid}])
}
 }catch(err){
throw err;
 }

}


exports.findUser=async(email)=>{
 try {
     const users=  await readData();

const matched= users.find(u=>u.email===email);

return matched;
 }catch(err){
throw err;
 }

}