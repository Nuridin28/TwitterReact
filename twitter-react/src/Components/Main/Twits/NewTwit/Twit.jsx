import '../twits.css'
import Tablist from './Tablist'
export default function Twit() {
    return (
        <div style = {{padding:"5px 15px"}}>
            <div className='new-twit-form'style = {{minHeight:100}}>
                <div>
                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="logo"style = {{width:'40px', height:'40px', borderRadius:"50%"}} />
                </div>

                <input type="text" placeholder="What is happenings?!" className="twit-input"/>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', borderTop:"1px solid gray", marginTop:5}}>
                <div style = {{paddingTop:5}}>
                    <Tablist />
                </div>
                <button className='btn-primary'>Post</button>
            </div>
        </div>
        
    )
}