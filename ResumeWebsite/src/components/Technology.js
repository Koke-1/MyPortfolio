import React,{useState} from 'react'
import techInfo from '../Local API/techInfo'

export default function Technology() {
    const [techno, settechno] = useState(2)
    console.log(techInfo.length);
    const next = () =>{
        settechno(techno + 1 )

        if (techno >= techInfo.length - 1 ) {
            settechno(0)
        } 

    }
    const prev = () =>{
        settechno(techno - 1 )

        if (techno <= 0 ) {
            settechno(techInfo.length - 1)
        } 

    }


    return (
        <section id="Technology" >
            <h1>Technologies</h1>
            <article className="TechInfo">
                <button onClick={()=> prev()}> - </button>
                <div className="TechBox">
                    <h1 className="title" style={{backgroundColor:techInfo[techno].color}}  >{techInfo[techno].title}</h1>
                    <ol>
                        <li style={{backgroundColor: techInfo[techno].color}} >{techInfo[techno].subtechs.One}</li>
                        <li style={{backgroundColor: techInfo[techno].color}} >{techInfo[techno].subtechs.Two}</li>
                        <li style={{backgroundColor: techInfo[techno].color}} >{techInfo[techno].subtechs.Three}</li>
                        <li style={{backgroundColor: techInfo[techno].color}} >{techInfo[techno].subtechs.Four}</li>
                    </ol>
                </div>
                <button onClick={()=>next()} > + </button>
            </article> 
        </section>
    )
}
