import ColorCard from "./colorCard";
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
        "red" ,  "yellow" , "#000000" , "#F08080" , "#E9967A" , "#40E0D0" , "#CCCCFF" , "#DE3163" , "#808000" , "#FFC300" , "blue" ,"#ff0040" , "#00ffff" , "#bfff00" , "rgb(255, 255, 128)" ,"green" ,
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
           
        </>
    );
}
export default ColorScreen;