import React,{useEffect, useState} from 'react'
import square from "../svg/square.svg"
import techInfo from '../Local API/techInfo'

export default function Technology() {
    const [techno, settechno] = useState(0)

    useEffect(() => {
        const squares = document.querySelectorAll(".square")
         squares.forEach((data)=> data.style.transform = "rotate(0deg)" )
         squares[techno].style.transformOrigin = "25% 60%"
         squares[techno].style.transform = "rotate(45deg)"

    }, [techno])
    

    return (
        <section id="Technology" >
            <h1 className="techno" >Technologies</h1>
            <article style={{backgroundColor:'white'}}  className="TechInfo">
                <div className="techholder" >
                    <div className="titleholder" >
                        <div className='title' style={{backgroundColor:techInfo[techno].color}}  >
                            <div className='imgholder' >
                              <img src={techInfo[techno].img} alt="" />  
                            </div> 
                          
                          
                        </div>
                        
                        </div>
                    <div className="onetech" >
                        {
                    techInfo[techno].subtechs.map((info)=>{
                        console.log(info);
                        return(
                            <div className='techcard' style={{border:`.1em solid ${techInfo[techno].color}`}} >
                              <h1>{info.tech}</h1>  
                            </div>
                            
                        )
                    })
                }</div>
                
                </div>
                <div className="switch" >
                    <div className='switchhold'>
                        {techInfo.map((data,index)=>{
                    const test = (e) => {
                        settechno(index)
                    }

                    return (
                        <div className='svgholder' >
                            <svg xmlns="http://www.w3.org/2000/svg"width="25%" height="100%" viewBox="-175 0 1500 600" onClick={(e)=>test()} >
<path className='square'
        fill="none" stroke={techInfo[index].color} stroke-width="75" onClick={(e)=>test()}
        d="M 45.00,0.08
           C 45.00,0.08 98.00,0.08 98.00,0.08
             98.00,0.08 198.00,0.08 198.00,0.08
             198.00,0.08 504.00,0.08 504.00,0.08
             504.00,0.08 610.00,0.08 610.00,0.08
             617.35,0.00 636.77,-1.76 641.26,4.22
             643.29,6.92 642.99,10.79 643.00,14.00
             643.00,14.00 643.00,497.00 643.00,497.00
             643.00,497.00 643.00,609.00 643.00,609.00
             643.00,609.00 643.00,632.00 643.00,632.00
             642.95,635.22 642.98,638.10 640.57,640.58
             637.13,644.13 631.55,643.99 627.00,643.96
             627.00,643.96 146.00,643.96 146.00,643.96
             146.00,643.96 34.00,643.96 34.00,643.96
             34.00,643.96 11.00,643.96 11.00,643.96
             7.66,643.46 4.09,642.65 2.01,639.78
             -0.23,636.68 0.01,632.63 0.00,629.00
             0.00,629.00 0.00,155.00 0.00,155.00
             0.00,155.00 0.00,37.00 0.00,37.00
             0.00,37.00 0.00,13.00 0.00,13.00
             0.05,9.32 0.25,5.26 3.39,2.74
             5.95,0.69 9.89,1.01 13.00,1.00
             13.00,1.00 45.00,0.08 45.00,0.08 Z
           M 57.00,2.07
           C 57.00,2.07 21.00,3.00 21.00,3.00
             16.97,3.00 8.38,2.27 5.30,4.74
             1.73,7.58 2.01,13.87 2.00,18.00
             2.00,18.00 2.00,482.00 2.00,482.00
             2.00,482.00 2.00,603.00 2.00,603.00
             2.00,603.00 2.00,629.00 2.00,629.00
             2.05,632.67 2.10,636.77 5.28,639.26
             8.46,641.76 16.96,641.99 21.00,642.00
             21.00,642.00 357.00,642.00 357.00,642.00
             357.00,642.00 575.00,642.00 575.00,642.00
             575.00,642.00 617.00,642.00 617.00,642.00
             621.94,642.00 632.79,642.41 636.89,639.99
             641.39,637.34 640.99,632.51 641.00,628.00
             641.00,628.00 641.00,148.00 641.00,148.00
             641.00,148.00 641.00,38.00 641.00,38.00
             641.00,38.00 641.00,14.00 641.00,14.00
             640.95,10.42 640.87,7.03 637.77,4.59
             634.62,2.11 626.96,2.01 623.00,2.07
             623.00,2.07 247.00,2.07 247.00,2.07
             247.00,2.07 122.00,2.07 122.00,2.07
             122.00,2.07 57.00,2.07 57.00,2.07 Z
           M 15.00,15.00
           C 15.00,15.00 628.00,15.00 628.00,15.00
             628.00,15.00 628.00,629.00 628.00,629.00
             628.00,629.00 15.00,629.00 15.00,629.00
             15.00,629.00 15.00,15.00 15.00,15.00 Z
           M 626.00,17.00
           C 626.00,17.00 17.00,17.00 17.00,17.00
             17.00,17.00 17.00,627.00 17.00,627.00
             17.00,627.00 626.00,627.00 626.00,627.00
             626.00,627.00 626.00,17.00 626.00,17.00 Z" />
</svg></div>
                        
                    )
                })
            }
                    </div>
                   
                </div>
                
            </article> 
            
        </section>
    )
}
