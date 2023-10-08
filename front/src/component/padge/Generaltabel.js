import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export default function Showtabel(props) {
console.log(props.user)
const curent =props.currentuser||false

   


    const headershow = props.header.map((el) => <td className="text-center">{el.name}</td>)

   

        
       const datashow = props.data.map((item, index) => <tr key={index}>

        {props.header.map((item2, index2) => 
        (<td className="text-center" key={index2}>{item[item2.key] === "1995" ? 
        "admin" : item[item2.key] === "2001" ?
         "uer" : item[item2.key] === "1991" ? 
         "writer" : item[item2.key] === "1995" ? 
         "prodeuct": item2.key==="image" ?(<img src={item[item2.key]} style={{width:"80px",height:"50px"}}/>)
         : item[item2.key]
          


        }   
        {curent&&item[item2.key]===props.currentuser&&"(you)"} 


        </td>))}


        <td>
{console.log(item.id)}
            <div className="justify-content-between d-flex">
                <div>
                  
                    <Link  to={`${item.id}`}> <FontAwesomeIcon beat icon={faUserPen} size="2xl" style={{ color: "#0000ff" }} />
                    </Link></div>
                    
                    {props.currentuser !== item.name && (<FontAwesomeIcon cursor={"pointer"}
                      onClick={() => props.delet(item.id)}   beat size="2xl" icon={faTrash} style={{ color: "#d41111", }} />
                    )}
                    <div>

                   
                </div></div>

        </td>



    </tr>)
  
    return (<>
        <div className="row m-3">
            <div className="col fs-3 fw-bold text-uppercase colorblue ">{props.titletable}</div>
            <div className="col text-center"><Link to={props.linkto} className="btn btn-primary">{props.add}</Link></div>
        </div>
        <table className="table table-striped table-info table-hover table-bordered border-primary" style={{ maxWidth: "80%" }}>
            <thead>
                <tr>
                    {headershow}
                    <td className="text-center"> action</td>

                </tr>
            </thead>

            <tbody>
                <tr>{props.data.length===0&&<td colSpan={12} className="text-center" >Loading<div className="spinner-grow text-black"style={{width:"1rem",height:"1rem"}}></div> </td>}</tr>
                {datashow}
            </tbody>
        </table>

    </>)
}
