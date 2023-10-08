
import { useEffect, useRef, useState } from "react"
import { Axios } from "../Axios"
import { CAT, Tokenuser, cat, pro } from "../../Api/api"
import Loading from "../Loading"
export default function Dashboard() {

const [form,setform]=useState({
    category:"select category",
    title:"",
    description:"",
    price:"",
    discount:"",
    About:"",

})
const dummyForm={
  category:null,
  title:"dummy",
  description:"dummy",
  price:222,
  discount:0,
  About:"Abut",
}
async function dummy(){
  try{
  const d= await Axios.post(`${pro}/add`,dummyForm)
  setid(d.data.id)

}catch(err){
  console.log(err)
}

}
const [loading,setloading]=useState(false)
const [images,setimg]=useState([])
const [catt,setcatt]=useState([])
const [sent,setsent]=useState(false)
const [id,setid]=useState()

async function Addpro(e){
e.preventDefault()

    try{
     
        const x= await Axios.post(`${pro}/edit/${id}`,form)
        setloading(true)
        console.log(x)
  //  window.location.pathname="dashbord/products"
  
    


    }catch(err){
  console.log(err)
    }
}


useEffect(()=>{

Axios.get(`${CAT}`)
.then((data)=>setcatt(data.data))
.catch((err)=>console.log(err))

},[])

const showdata = catt.map((item,index)=><option key={index} value={item.id}>{item.title}</option>)



function formchange(e){
    setform({  ...form ,[e.target.name]:e.target.value})
    
    if(!sent)
    {
      dummy()
    }
    console.log(sent)
    showinput()
}






//images show

const showImage= images.map((item,key)=>(
  <div className=" row border border-3 border-success m-4 rounded-4 p-3">
<div key={key} className=" row">
 <div  style={{width:"max-content"}}> <img src={URL.createObjectURL(item)} width={"80px"} height={"80px"}/></div>
 <div className="col">
<p> name :{item.name}</p>
<p>size:{item.size/1024 <900 ? (item.size /1024).toFixed(2) +"kb":(item.size/ (1024*1024)).toFixed(2) +"mb" }</p>

</div>
</div>
<div className="row my-4"> 
<div className="progress">
  <span className="progress-bar w-50 bg-success progress-bar-striped progress-bar-animated" >25%</span>
</div>


</div>

</div>
))
const uploadref=useRef(null)
function uploadimg(){
  uploadref.current.click()
}
function showinput(){
  setsent(1)
}

async function uploadphotos(e){
  setimg((prev)=>([...prev,...e.target.files]))
  const imgasfil=e.target.files
  const data = new FormData()
  for(let i =0; i<imgasfil.length;i++){
  data.append("image",imgasfil[i])
  data.append("product_id",id)
    try{
   const oneimg=Axios.post("/product-img/add",data)

console.log(oneimg)


    }catch(err){
 console.log(err)
    }





  }
}
return (<>
    
      
  <div className="container border  p-0 ms-0 mt-4 rounded-4 border-success">
  <form className="text-success" onSubmit={Addpro}>{loading&&<Loading/>} 
  <div className="col  form-floating w-50 m-5 ">
    <select value={form.category}  name="category" onChange={formchange} className="form-select text-success" placeholder="1" required>
      {showdata}
      <option  disabled>select category</option>
    </select>
     <label> Category </label>
   </div>
   <div className="col  form-floating w-50 m-5 ">
    <input type="text" disabled={!sent} name="title" value={form.title} onChange={formchange} className="form-control text-success" placeholder="1" required/>
     <label> Title </label>
   </div>
   <div className="col  form-floating w-50 m-5 ">
    <input type="text" disabled={!sent} name="description" value={form.description} onChange={formchange} className="form-control text-success" placeholder="1" required/>
     <label>Description </label>
   </div>
   <div className="col  form-floating w-50 m-5 ">
    <input type="number" disabled={!sent} maxLength={"10"} name="price" value={form.price} onChange={formchange} className="form-control text-success" placeholder="1" required/>
     <label> price</label>
   </div>
   <div className="col  form-floating w-50 m-5 ">
    <input type="number" disabled={!sent} maxLength={"10"} name="discount" value={form.discount} onChange={formchange} className="form-control text-success" placeholder="1" required/>
     <label> Discount</label>
   </div>
   <div className="col  form-floating w-50 m-5 ">
    <input type="text" disabled={!sent} name="About" value={form.About} onChange={formchange} className="form-control text-success" placeholder="1" required/>
     <label> About</label>
   </div>
   <div className="col d-none form-floating w-50 m-5 ">
    <input type="file" disabled={!sent} ref={uploadref} multiple onChange={uploadphotos} className="form-control text-success " placeholder="1"/>
     <label> image</label>
   </div>
  
  <div className="col m-5 "><button  type="submit" disabled={!sent} className="btn border border-success border-1  colorgreen fs-4 fw-bold">add</button></div>
         
  </form>
   </div> 
   <div  disabled={!sent} onClick={uploadimg} className="w-100 m-4 rounded-3 " style={{border:"2px dashed green", cursor:!sent?"normal":"pointer"}}>
<div className="d-flex align-item-center justify-content-center ">
  <img src={require("../img/upload (1).png")} style={{filter:!sent&&"grayscale(1)"}} alt="ll" width={"100px"}/>
  </div>
  <div className="d-flex align-item-center justify-content-center " style={{color:!sent&&"gray"}}><h4>UPLOAD PHOTOS</h4></div>
   </div>
   <div>{showImage}</div>

   </>)
}