let profile;
document.getElementById("submitbtn").addEventListener("click",async(e)=>{
    e.preventDefault()
    const data=document.getElementById("profile").files[0]
    // const data= e.target.files[0]
    profile=await convertBase64(data)
        console.log(profile);
        
})


function convertBase64(file){
    console.log(file);
    
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
