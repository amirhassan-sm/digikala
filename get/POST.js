export const  POST= async(url,bodyrequest)=>{
     return fetch(`http://localhost:9090/${url}`,{
        method:"post",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(bodyrequest)
    })
}
