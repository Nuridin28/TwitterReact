import search from './img/search-3.png'
import './styles.css'
export default function Seacrh(){
    return (
        <div className="search" >
            <img src={search} alt="seacrh" style={{height:'20px', width:'20px'}}/>
            <input type="search"  className='search-input' placeholder={'seacrh'}/>
        </div>
    )
}