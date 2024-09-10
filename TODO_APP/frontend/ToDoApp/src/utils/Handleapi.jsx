import axios from 'axios'


const baseurl = "http://localhost:8000"


const getallToDo = (setToDo) =>{

   axios.get(baseurl)
   .then(({data})=>{
     console.log("data--->",data);
     setToDo(data)
   })

}


const addToDo = (text,setText,setToDo ) =>{

    axios.post(`${baseurl}/save`,{text})
    .then((data) => {
       console.log(data);
       setText("")
       getallToDo(setToDo)

    })
    .catch((err)=>console.log(err))
}

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdating ) =>{

    axios.post(`${baseurl}/update`,{_id: toDoId,text})
    .then((data) => {
       console.log(data);
       setText("")
       setIsUpdating(false)
       getallToDo(setToDo)

    })
    .catch((err)=>console.log(err))
 

}




const deleteToDo = (_id,setToDo ) =>{

    axios.post(`${baseurl}/delete`,{_id})
    .then((data) => {
       getallToDo(setToDo)

    })
    .catch((err)=>console.log(err))
 

}












export {getallToDo , addToDo , updateToDo , deleteToDo}