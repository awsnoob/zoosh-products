import React from "react"

const Slide = ({ data, text }) => {
    return (
        <div>
            <div className="slide-wrap">
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width:
                                data[0].category === "All Purpose Cleaner"
                                    ? "27%"
                                    : "33%",
                            marginBottom: "3rem",
                        }}
                    >
                        {text}
                    </div>
                    <img
                        src="images/Zoosh logo.png"
                        alt=""
                        style={{
                            width: "25%",
                        }}
                    />
                </div>
                {data.map((data, index) => {
                    return (
                        <div
                            key={`key_${index}`}
                            style={{
                                backgroundColor: data.image.color,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                flexGrow: 1,
                                padding: "4rem 0",
                            }}
                        >
                            <img
                                src={`./images/products/${data.image.src}`}
                                alt=""
                                style={{
                                    maxWidth:
                                        data.category === "All Purpose Cleaner"
                                            ? "60%"
                                            : "38%",
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slide
