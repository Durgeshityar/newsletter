import Header from '@/shared/widgets/header/header'
import Footer from '@/shared/widgets/footer/footer'

import Banner from './elements/banner'
import Branding from './elements/branding'
import Benifits from './elements/benifits'
import FeatureHighlight from './elements/feature-highlight'
import Pricing from './elements/pricing'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benifits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home
