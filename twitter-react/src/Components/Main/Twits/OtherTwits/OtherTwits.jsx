import TwitBody from './TwitBody';
import { twits } from './twits';
export default function OtherTwits(){
    return (
        twits.map((item) => {
            return <TwitBody twit={item} />
        })
    )
}