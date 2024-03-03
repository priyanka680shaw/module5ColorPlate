import './colorCrd.css';

function ColorCard(props){
    console.log(props);
    return(
        <>
            <div className='colormaincontainer'>
                <div className='colorinnercontainer'>
                    <div style = {
                        {
                            backgroundColor : props.color
                        }
                    } className='colorBox'>

                    </div>
                    <div className='colorname'>
                        <h4>{props.color}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ColorCard;