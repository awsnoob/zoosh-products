import React from "react"
import Slide from "../components/slide"
import AllPurposeCleaner from "../components/svg-text/all-purpose-cleaner"
import DishwashLiquidConcentrate from "../components/svg-text/dishwash-liquid-concentrate"

const Banner = ({ products }) => {
    const dishwashLiquids = products.slice(4, 6)
    const allPurposeCleaners = products.slice(2, 4)

    const allPurposeCleanerText = <AllPurposeCleaner />
    const dishwashLiquidConcentrateText = <DishwashLiquidConcentrate />

    return (
        <div>
            <div id="slide_01" className="slide">
                <Slide
                    data={dishwashLiquids}
                    text={dishwashLiquidConcentrateText}
                />
            </div>
            <div id="slide_2" className="slide">
                <Slide data={allPurposeCleaners} text={allPurposeCleanerText} />
            </div>
        </div>
    )
}

export default Banner
