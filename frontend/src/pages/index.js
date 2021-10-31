import React from "react"
import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"
import FeaturedProductions from "../components/home/FeaturedProductions"
import MarketingButtons from "../components/home/MarketingButtons"
import CallToAction from "../components/home/CallToAction"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProductions />
    <MarketingButtons />
    <CallToAction />
  </Layout>
)

export default IndexPage
