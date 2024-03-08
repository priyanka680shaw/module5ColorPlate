import ColorCard from "./colorCard";
import InnerCardInfo from "./card/InnerCardInfo";
import ImageCard from "./card/imgeCard";
import bgImage from "./card//assest/bg1.jpg";
import poster1 from './card/assest/BrightPoster.jpeg'
import bgImage2 from './card/assest/bg2.jpeg'
import poster2 from './card/assest/p2.jpeg'
function ColorScreen(){
    //color generate
    // function randomColor(){
    //     const colorCode = "123456789abcdefg";
    //     const getColor = "#";
    //     for(let i=0; i<=colorCode; i++){
    //         const createRandomColor  = Math.floor(Math.random()*colorCode.length);
    //         getColor+=colorCode[createRandomColor];
    //         return getColor;
    //     }
    // }
    const colorPlateColors = [
        "red" ,  "yellow" , "#000000" , "#F08080" , "#E9967A" , "#40E0D0" , "#CCCCFF" , "#DE3163" , "#808000" , "#FFC300" , "blue" ,"#ff0040" , "#00ffff" , "#bfff00" , "rgb(255, 255, 128)" ,"green" , "#E9965B" , "#30E0D0" , "#CBBCFF" , "#DE1163" , "#808990" , "#GGC300" , "blue" ,
    ]
    return(
        <>
            <h1 style ={{textAlign : "center"}}>Color Palate</h1>
            <div className = "colorContainer" style = {{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexWrap : "wrap"

            }}>
                
                {
                    colorPlateColors.map((color , index)=>(
                        <ColorCard key = {index} color = {color}/>
                    ))
                }
            </div>
           
            <ImageCard backgroundImage = {bgImage} image = {poster1} seriesName={"Bright"} dateYear={"2017 , David Aye"} time={"115min"} seriesType={"Action,Crime,Fantecy"} about={"The film was released worldwide on Netflix on December 22, 2017. While it has received largely negative reviews from critics, it was exceptionally popular with viewers. "}/>

            <ImageCard backgroundImage = {bgImage2} image = {poster2} seriesName={"Tomb Rider"} dateYear={"2018 , Roar Hutting"} time={"118min"} seriesType={"Action,Crime,Fantecy"} about={"The film was released worldwide on Netflix on December 22, 2017. While it has received largely negative reviews from critics, it was exceptionally popular with viewers. "}/>
            
        </>
    );
}
export default ColorScreen;