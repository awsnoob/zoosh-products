import React from "react"
import ACleanerFuture from "../components/svg-text/a-cleaner-future"
import About from "../components/svg-text/about"

const Opening = () => {
    return (
        <div>
            <div className="opening-wrap">
                <div className="opening-logo-wrap">
                    <img src="images/Zoosh logo.png" alt="" />
                </div>
                <div className="opening-text-wrap">
                    <div
                        style={{
                            marginBottom: "3rem",
                            width: "100%",
                        }}
                    >
                        <ACleanerFuture />
                    </div>
                    <About />
                </div>
            </div>
        </div>
    )
}

export default Opening
