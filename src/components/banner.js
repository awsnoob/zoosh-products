import React from "react"
import Slide from "../components/slide"
import AllPurposeCleaner from "../components/svg-text/all-purpose-cleaner"
import DishwashLiquidConcentrate from "../components/svg-text/dishwash-liquid-concentrate"
import NewHandBodyWash from "../components/svg-text/hand-body-wash"

const Banner = ({ products }) => {
    const dishwashLiquids = products.slice(0, 2)
    const allPurposeCleaners = products.slice(2, 4)
    const handBodyWash = products.slice(4, 6)

    const allPurposeCleanerText = <AllPurposeCleaner />
    const dishwashLiquidConcentrateText = <DishwashLiquidConcentrate />
    const handBodyWashText = <NewHandBodyWash />

    return (
        <div>
            <div id="slide_3" className="slide">
                <Slide
                    data={handBodyWash}
                    text={handBodyWashText}
                    textWidth="36%"
                />
            </div>
            <div id="slide_01" className="slide">
                <Slide
                    data={dishwashLiquids}
                    text={dishwashLiquidConcentrateText}
                    textWidth="33%"
                />
            </div>
            <div id="slide_2" className="slide">
                <Slide
                    data={allPurposeCleaners}
                    text={allPurposeCleanerText}
                    textWidth="27%"
                />
            </div>
        </div>
    )
}

export default Banner
