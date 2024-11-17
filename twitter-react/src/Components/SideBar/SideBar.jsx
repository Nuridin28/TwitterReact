import MenuItem from "./MenuItem"
import { MenuItems } from "./MenuItems"
import "./Sidebar.css"
import { Logo } from "./Logo"
export default function SideBar(){
    return (
        <div className="sidebar">
            <div style={{width:'30px', height:'30px'}}>
                <Logo />
            </div>
            {
                MenuItems.map((item, index) => <MenuItem icon = {item.icon} label = {item.label} key={index}/>)
            }
        </div>
    )
}