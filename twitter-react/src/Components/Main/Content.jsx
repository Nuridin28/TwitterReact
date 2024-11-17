import Header from "./Header";
import Twit from "./Twits/NewTwit/Twit";
import OtherTwits from "./Twits/OtherTwits/OtherTwits";

export default function Content() {
    return (
        <div className="content">
            <Header />
            <Twit />
            <OtherTwits />
        </div>
    )
}