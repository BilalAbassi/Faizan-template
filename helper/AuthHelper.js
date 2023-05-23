import bcrypt from "bcrypt"

export const HashPassward = async (password)=>{
try {
    const salt =10;
    const hashpassword = await bcrypt.hash(password,salt)
    return hashpassword

} catch (error) {
    console.log(error)
}

}

export const  ComparePassword =async(password,hashpassword)=>{

return bcrypt.compare(password,hashpassword)

}