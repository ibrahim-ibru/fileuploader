async function getFile() {
    // const searchurl=window.location.search
    const token=sessionStorage.getItem("token")
    const urlParams=new URLSearchParams(window.location.search)
    const id=urlParams.get("id")
    const res=await fetch(`http://localhost:3000/api/${id}`,{
        method:"GET",
        headers:{"authorization":`Bearer ${token}`}
    })  
    // data= await res.json()
    console.log(res);
    if (res.status==200) {
        const {profile}=await res.json()
        document.getElementById("viewimg").src=profile
    }
    else{
        const {msg}=await res.json()
        alert(msg);
        
        }
    }

getFile()