import React from "react"

import PowersThroughGrease from "../components/svg/powers-through-grease"
import NoAminalTesting from "../components/svg/no-animal-testing"
import RecyclableBottle from "../components/svg/recyclable-bottle"
import GreyWaterSafe from "../components/svg/grey-water-safe"
import AustralianMade from "../components/svg/australian-made"
import SoftHygenicallyClean from "../components/svg/soft-hygenically-clean"

export default ({ category }) => {
    //

    const isHygenicallyClean = category => {
        return category === "Hand Sanitiser" || category === "Hand & Body Wash"
    }

    const CatchPhrase = isHygenicallyClean(category) ? (
        <SoftHygenicallyClean />
    ) : (
        <PowersThroughGrease />
    )

    const catchPhraseSize = isHygenicallyClean(category) ? "35%" : "30%"

    return (
        <div
            id="productIcons"
            className="product-icons-wrap"
            style={{
                gridTemplateColumns:
                    category !== "Hand Sanitiser"
                        ? `${catchPhraseSize} 13% 13% 14% 20%`
                        : `${catchPhraseSize} 13% 13% 20%`,
            }}
        >
            {CatchPhrase}

            <NoAminalTesting />

            <RecyclableBottle />

            {category !== "Hand Sanitiser" ? <GreyWaterSafe /> : null}

            <AustralianMade />
        </div>
    )
}
