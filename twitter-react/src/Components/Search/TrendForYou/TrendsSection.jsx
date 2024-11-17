import Trend from "./Trend"
export default function Trends(){
    return(
        <div className="trends">
            <h3 style={ {
                textAlign:'center'
            }}>Trends For You</h3>
            <Trend/>
            <Trend/>
            <Trend/>
        </div>
    )
}