import like from "./img/like.png";
import reply from "./img/reply.png";
import com from "./img/com.png";

export default function TwitBody({ twit }) {
    return (
        <div
            className="twit"
            style={{
                border: "1px solid black",
                padding: "10px",
            }}
        >
            <div
                className="header-twit"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <div className="logo">
                    <img
                        src={twit.avatar}
                        alt="logo"
                        style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                        }}
                    />
                </div>
                <div className="author">{twit.author}</div>
            </div>

            <div
                className="text"
                style={{
                    padding: "40px",
                }}
            >
                {twit.text}
            </div>

            <div
                className="interactions"
                style={{
                    display: "flex",
                    gap: "20px",
                    width:'100%',
                    justifyContent:'space-around'
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    <img
                        src={reply}
                        alt="reply"
                        style={{
                            height: "40px",
                            width: "40px",
                            aspectRatio:"1/1"
                        }}
                    />
                    <p>23K</p>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    <img
                        src={like}
                        alt="like"
                        style={{
                            height: "40px",
                            width: "40px",
                            aspectRatio:"1/1"
                        }}
                    />
                    <p>109K</p>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    <img
                        src={com}
                        alt="comment"
                        style={{
                            height: "40px",
                            width: "40px",
                            aspectRatio:"1/1"
                        }}
                    />
                    <p>2K</p>
                </div>
            </div>
        </div>
    );
}
