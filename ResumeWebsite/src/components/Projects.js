import React from 'react'
import projectinfo from '../Local API/projectsinfo'

export default function Projects() {
    return (
        <section id="Projects" >
            <h1>Projects</h1>
            <article className="all" >
                {projectinfo.map((info) => {
                    const { title, color, desc, link } = info
                    return (
                        <a href={link} >
                            <div className="project" style={{ backgroundColor: color }} >
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        </a>
                    )
                })}


            </article>


        </section>
    )
}
