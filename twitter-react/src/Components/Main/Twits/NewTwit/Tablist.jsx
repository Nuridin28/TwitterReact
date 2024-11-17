import { tabs } from './tabs';
import Tab from './Tab';
import '../twits.css'
export default function Tablist() {
    return (
        <div className='tablist'>
            {
                tabs.map((item, index) => (
                    <div style={{width:"20px", height:'20px', cursor:'pointer'}}>
                        {
                            <Tab key={index} icon={item.icon} />
                        }
                    </div>
                   
                ))
            }
        </div>
    );
}
