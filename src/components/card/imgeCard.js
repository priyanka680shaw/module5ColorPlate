import './imageCard.css';
import React from 'react';
import heroImage from './assest/bg1.jpg'
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import InnerCardInfo from './InnerCardInfo';

function ImageCard(props){
    console.log("data " , props)
    return(
        <>
            <main>
                <div className='imageCardOuterContainer'>
                    <div className='imageCardinnerContainer'>
                       <div className ="heroBgImage" style={{backgroundImage: `url(${props.backgroundImage})`}}>
                            <div className= "overlay">
                            {/* image , seriesName , dateYear ,  time , about , seriesType  */}
                                <InnerCardInfo image = {props.image} seriesName={props.seriesName} dateYear={props.dateYear} time={props.time} seriesType={props.seriesType} about={props.about}/>
                               


                                


                                {/* <div className = "socialIconsContainer" >
                                    <div className = "socialIcons">
                                        {/* <ul>
                                            <li><a href='#'><FaShareAlt /></a></li>
                                            <li><a href='#'><FaHeart /></a></li>
                                            <li><a href='#'><FaFolder /></a></li>
                                        </ul> 
                                    </div>
                                </div> */}

                            </div>
                            
                       </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ImageCard;