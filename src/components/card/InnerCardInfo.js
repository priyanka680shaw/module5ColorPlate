import './innerCardInfo.css'
import boxImage from './assest/bg1.jpg'
function InnerCardInfo({image , seriesName , dateYear ,  time , about , seriesType }){
    console.log({image , seriesName , dateYear ,  time , about , seriesType })
    return(
        <>
            <div className="cardInfoContainer">
                <div className="cardInfoInnerContainer">
                    <div className="imageInfo">
                        <div className='imgBox'>
                        
                            <figure>
                                <img src ={image} alt = "img"></img>
                            </figure>
                        </div>
                        <div className='aboutimg'>

                            <h3 style={{color : "white"}}>{seriesName}</h3>
                            <p style={{color : "blue"}}>{dateYear}</p>
                            <span className='playBtn'>
                                <button>{time}</button>
                                <p>{seriesType}</p>
                            </span>
                        </div>
                        
                    </div>
                    <div className="cardimgabout">
                        <p>{about}</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default InnerCardInfo;