const fs = require('fs')
const path = require('path');
const bcrypt = require('bcrypt');
const filePath = path.join(process.cwd(), 'data', 'users.json')
const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, fileData) => {
            if (err) {
                reject()
            } else {
                resolve(JSON.parse(fileData.toString()))//buffer (binary raw)
            }
        })
    })


}
const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) {
                reject()
            } else {
                resolve()
            }
        })
    })


}

exports.createUser=async(email,password,uid)=>{
const users=await readData(); 
const matched=users.find(u=>u.email===email)
if(matched){
    throw new Error ("user already exists!")
}else{
const encPass=await bcrypt.hash(password,12)//salt round
   await writeData([...users,{email,password:encPass,uid}])
}
}
exports.findUser=async(email)=>{
const users=await readData(); 
const matched=users.find(u=>u.email===email)
return matched;
}