import axios from "axios"
import Swal from "sweetalert2"

export const uploadImage=async(image)=>{
    const formdata= new FormData()
    formdata.append('image',image)
    try{
        const {data}= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key} `, formdata)
        // console.log(data.data.display_url)
        return data.data.display_url
    }
    catch(error){
        Swal.fire(error.message)
    }
}