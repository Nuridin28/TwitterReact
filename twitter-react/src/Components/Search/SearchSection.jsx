import Seacrh from "./Search.Jsx";
import './styles.css'
import Subscribe from "./SubscribeBlock/Subscribe";
import Trends from "./TrendForYou/TrendsSection";
export default function SearchSection(){
    return (
        <div className="search-section">
            <Seacrh />
            <Subscribe />
            <Trends />
        </div>

    )
}