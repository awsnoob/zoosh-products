import React from "react"

import ProductIcons from "../components/product-icons"

const Product = ({ data }) => {
    // console.log(data)
    const features = data.dotpoints.map((dotpoint, i) => (
        <li key={i} style={{ listStyleType: "none" }}>
            {dotpoint}
        </li>
    ))

    return (
        <div className="product-wrap">
            <div
                style={{
                    backgroundColor: data.image.color,
                    padding: "3rem",
                    marginBottom: "3rem",
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
                        marginBottom: "4rem",
                    }}
                >
                    <h4>FEATURES & BENEFITS</h4>
                    <ul
                        style={{
                            paddingLeft: "0",
                            marginBottom: "0",
                        }}
                    >
                        {features}
                    </ul>
                </div>
                <ProductIcons />
            </div>
        </div>
    )
}

export default Product
