// import { useState,useEffect } from "react"
// {userId:1,
//     userName:"Ava",
//     number:"",
//     avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
//     chatData:[],
//  }
export const getData= async(name)=>{
    await localStorage.getItem(name).then(data=>JSON.parse(data))
}
export const setData= async(num,data)=>{
    await localStorage.setItem(num,JSON.stringify(data))
}


export const getUsers = (data)=>{
    let chats = []
    for(let i = 0;i<data.length;i++){
        let users = {
            userId:data[i].userId,
            userName:data[i].name,
            number:data[i].number,
            avtar:data[i].avtar,
            isOwner:false,
            chats:[]
        }
        chats.push(users)
    }
    return chats;
}


export const findMyData = (data)=>{

}
export let data = [
    {
     userId:1,
     number:"+918794476826",
     otp: Math.floor(1000 + Math.random() * 9000).toString(),
     isVarified:true,
     avtar:'https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg',
     name:"ishan",
     chats:[],
   },
   {
    userId:2,
    number:"+919863673593",
    otp: Math.floor(1000 + Math.random() * 9000).toString(),
    isVarified:true,
    avtar:'https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg',
    name:"Eve",
    chats:[]
    }

]