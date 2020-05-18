import React from "react"

import CatchPhrase from "../components/svg/powers-through-grease"
import NoAminalTesting from "../components/svg/no-animal-testing"
import RecyclableBottle from "../components/svg/recyclable-bottle"
import GreyWaterSafe from "../components/svg/grey-water-safe"
import AustralianMade from "../components/svg/australian-made"

export default () => {
    return (
        <div id="productIcons" className="product-icons-wrap">
            <CatchPhrase />
            <NoAminalTesting />
            <RecyclableBottle />
            <GreyWaterSafe />
            <AustralianMade />
        </div>
    )
}
