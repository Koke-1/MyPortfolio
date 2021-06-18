import React from 'react'
import projectinfo from '../Local API/projectsinfo'

export default function Projects() {
    return (
        <section className="Projects" >
            <h1>Projects</h1>
            <article className="all" >
                {projectinfo.map((info)=>{
                    const {title,color,desc,svg} = info
                    return (
                       <div className="project" style={{backgroundColor:color}} >
                        <h3>{title}</h3>
                        <p>{desc}</p>
                       </div> 
                    )
                })}
                
        
            </article>

            
        </section>
    )
}
