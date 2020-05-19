import React from "react"

import CatchPhrase from "../components/svg/powers-through-grease"
import NoAminalTesting from "../components/svg/no-animal-testing"
import RecyclableBottle from "../components/svg/recyclable-bottle"
import GreyWaterSafe from "../components/svg/grey-water-safe"
import AustralianMade from "../components/svg/australian-made"

export default ({ category }) => {
    return (
        <div
            id="productIcons"
            className="product-icons-wrap"
            style={{
                gridTemplateColumns:
                    category !== "Hand Sanitiser"
                        ? "30% 13% 13% 14% 20%"
                        : "30% 13% 13% 20%",
            }}
        >
            <CatchPhrase />

            <NoAminalTesting />

            <RecyclableBottle />

            {category !== "Hand Sanitiser" ? <GreyWaterSafe /> : null}

            <AustralianMade />
        </div>
    )
}
