let profile;
document.getElementById("submitbtn").addEventListener("click",async(e)=>{
    e.preventDefault()
    try{

        const data=document.getElementById("profile").files[0]
        // const data= e.target.files[0]
        profile=await convertBase64(data)
            console.log(profile);
            const res= await fetch("http://localhost:3000/api/addfile",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({profile})
            })

            console.log(res);

        if(res.status==201){
            const {msg,id,token}= await res.json()
            alert(msg)
            console.log(id);
            sessionStorage.setItem("token",token)
            document.getElementById("url").innerHTML=`<a href="../pages/view.html?id=${id}">http://localhost:3000/pages/view.html?id=${id}</a>
`
            
        }
        if(res.status==404){
            const {msg}= await res.json()
            alert(msg)
        }

    }
    catch (error) {
    console.log(error);
    
}

        
})










async function convertBase64(file){
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
