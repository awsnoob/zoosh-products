import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { Helmet } from "react-helmet"

import Opening from "../components/opening"
import Banner from "../components/banner"
import Product from "../components/product"
import Footer from "../components/footer"

import "../styles/global.css" // global stylesheet

import JSONData from "../data/products.json"

const HomePage = () => {
    const isMobile = () => {
        return typeof document !== "undefined" &&
            document.documentElement.clientWidth > 700
            ? true
            : false
    }
    return (
        <ReactFullpage
            autoScrolling={true}
            scrollOverflow={isMobile()}
            scrollHorizontally={true}
            touchSensitivity={20}
            responsiveWidth={700}
            render={comp => (
                <ReactFullpage.Wrapper>
                    <div id="opening" className="section">
                        <Helmet>
                            {/* 
                            FontAwesome JS font file loaded directly in Document <head></head> via React Helmet plugin
                            https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself#using-svg
                        */}
                            <script src="all.js"></script>
                        </Helmet>
                        <Opening />
                    </div>
                    <div id="statement" className="section">
                        <div
                            style={{
                                textAlign: "center",
                                padding: "7rem 3rem 9rem 3rem",
                                maxWidth: "1000px",
                                margin: "0 auto",
                            }}
                        >
                            <h1>Company & Environmental Statement</h1>

                            <p>
                                Zoosh has recognised the environmental evolution
                                in home care products.
                            </p>
                            <p>
                                Zoosh is our contribution to a sustainable
                                cleaner future. We design our products with the
                                planet in mind based on highly efficient
                                renewable plant-based ingredients, whilst
                                constantly striving to source the latest in
                                eco-friendly packaging solutions for cleaner
                                future.
                            </p>
                        </div>
                    </div>
                    <div
                        id="banner"
                        className="section fp-auto-height-responsive"
                    >
                        <Banner products={JSONData.products} />
                    </div>
                    <div id="products" className="section">
                        <div className="products-wrap">
                            {JSONData.products.map((data, index) => {
                                return (
                                    <Product key={`key_${index}`} data={data} />
                                )
                            })}
                        </div>
                    </div>
                    <div id="footer" className="section fp-auto-height">
                        <Footer />
                    </div>
                </ReactFullpage.Wrapper>
            )}
        />
    )
}

export default HomePage
