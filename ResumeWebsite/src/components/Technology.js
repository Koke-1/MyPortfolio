import React,{useState} from 'react'
import techInfo from '../Local API/techInfo'
import TechComponent from './TechComponent';

export default function Technology() {
    const [techno, settechno] = useState(2)
    console.log(techInfo.length);

    return (
        <section id="Technology" >
            <h1>Technologies</h1>
            <article className="TechInfo">
                <div className="TechBox">
                    {
                        techInfo.map((data)=>{
                            return (
                                <TechComponent data={data} testing = "testing" /> 
                            )
                        })
                    }

                    
                </div>
            </article> 
        </section>
    )
}
