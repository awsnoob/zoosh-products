import React from "react"
import Slide from "../components/slide"
import AllPurposeCleaner from "../components/svg-text/all-purpose-cleaner"
import DishwashLiquidConcentrate from "../components/svg-text/dishwash-liquid-concentrate"
import NewHandBodyWash from "../components/svg-text/hand-body-wash"
// import NewPersonalCare from "../components/svg-text/personal-care"
import AntiBacterial from "../components/svg-text/anti-bacterial"

const Banner = ({ products }) => {
    const dishwashLiquids = products.slice(0, 2)
    const allPurposeCleaners = products.slice(2, 4)
    const handBodyWash = products.slice(4, 6)
    // const handSanitiser = products[6]
    const antiBacterialSanitisers = products.slice(6, 8)

    // the 'kills 99% of germs' logo is not a product, so cannot be entered in products.json
    // which is why we enter the data here
    // const killsGerms = {
    //     image: {
    //         color: handSanitiser.image.color,
    //         src: "99-percent-germs-logo.png",
    //     },
    //     banner_width_as_percentage: "34",
    // }

    // let personalCare = []
    // personalCare.push(handSanitiser)
    // personalCare.push(killsGerms)

    const allPurposeCleanerText = <AllPurposeCleaner />
    const dishwashLiquidConcentrateText = <DishwashLiquidConcentrate />
    const handBodyWashText = <NewHandBodyWash />
    // const personalCareText = <NewPersonalCare />
    const antiBacterial = <AntiBacterial />

    return (
        <div>
            <div id="slide_3" className="slide">
                <Slide
                    data={handBodyWash}
                    text={handBodyWashText}
                    textWidth="31%"
                />
            </div>
            <div id="slide_4" className="slide">
                <Slide
                    data={antiBacterialSanitisers}
                    text={antiBacterial}
                    textWidth="32%"
                />
            </div>
            <div id="slide_01" className="slide">
                <Slide
                    data={dishwashLiquids}
                    text={dishwashLiquidConcentrateText}
                    textWidth="35%"
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
