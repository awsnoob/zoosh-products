import React, { useState } from "react"

import ProductIcons from "../components/product-icons"

const Product = props => {
    //
    const data = props.data
    const fullpageApi = props.fullpageApi

    const [showFeatures, setShowFeatures] = useState(false)

    const features = data.dotpoints.map((dotpoint, i) => (
        <li key={i} style={{ listStyleType: "none" }}>
            {dotpoint}
        </li>
    ))

    const animationTime = 300

    const clickHandler = event => {
        event.preventDefault()
        setShowFeatures(!showFeatures)
        setTimeout(() => {
            fullpageApi.reBuild()
        }, animationTime)
    }

    return (
        <div className="product-wrap">
            <div
                style={{
                    backgroundColor: data.image.color,
                    padding: "3rem",
                    marginBottom: "6rem",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(./images/products/${data.image.src})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: 0,
                        width: "100%",
                        paddingBottom: "100%",
                    }}
                ></div>
            </div>

            <div className="product-text-wrap">
                <h2>{data.name}</h2>
                <h3>{data.category}</h3>

                <div>
                    {data.description.split("\\n").map((string, index) => {
                        return <p key={`key_${index}`}>{string}</p>
                    })}
                </div>
                <div>
                    <h4>HOW TO USE</h4>
                    {data.how_to_use.split("\\n").map((string, index) => {
                        return <p key={`key_${index}`}>{string}</p>
                    })}
                </div>
                <div
                    style={{
                        marginBottom: "2rem",
                    }}
                >
                    <p>
                        <a
                            style={{
                                textDecoration: "none",
                                fontWeight: "400",
                                color: "#1e78c2",
                            }}
                            href="#view-features-and-benefits"
                            onClick={e => clickHandler(e)}
                        >
                            Read more
                        </a>
                    </p>
                    <div
                        style={{
                            maxHeight: showFeatures ? "1000px" : "0px",
                            transition: `max-height ${animationTime}ms ease-out`,
                            overflow: "hidden",
                        }}
                    >
                        <h4
                            style={{
                                marginTop: "2rem",
                            }}
                        >
                            FEATURES & BENEFITS
                        </h4>
                        <ul
                            style={{
                                paddingLeft: "0px",
                                marginBottom: "0px",
                            }}
                        >
                            {features}
                        </ul>
                    </div>
                </div>
                <ProductIcons />
            </div>
        </div>
    )
}

export default Product
