import React, { useState } from 'react'

export default function TechComponent({data,testing}) {
    const [toggle, settoggle] = useState(false)

    const {subtechs,title} = data


    return (
        <div className="info"  onClick={()=> settoggle(!toggle)}  style={{backgroundColor:data.color}} >
            {toggle ? 
                
            subtechs.map((info)=>{
                return (
                    <h1 className="List" >{info}</h1>
                )
            })
            : 
            <h1 className="Title" >{title}</h1> 
            }
          
        </div>
    )
}
