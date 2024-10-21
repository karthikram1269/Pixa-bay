import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pix(){
     const [api,setApi] = useState([]);
     const [search,setSearch] = useState("");
     let navigate = useNavigate();

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=46193712-1f18297726894278411dc5778&q=${search}&image_type=photo&pretty=true`).then(a => a.json()).then(val =>
            setApi(val.hits)
        )},[search])

    return(
        <>
        <div className="outDiv">
            <div className="inDiv">
            <input
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>
          <div className="images">
            <div className="inImages">
            {
                api.map((x) => {
                    return( 
                        <div key={x.id}>
                        <img onClick={() => navigate("/details",{state:{x}})
                        } src={x.webformatURL} alt={x.tags}/>
                        </div>
                    )
                }
                )
            }
            </div>
        </div>  
        </div>
        
        </>
    )
}
export default Pix