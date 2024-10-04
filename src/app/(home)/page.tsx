import HeroSectionV2 from '../../components/shad-react/Hero'
import ChooseUsSection from '../../components/shad-react/ChooseUs'
import ServicesSection from '../../components/shad-react/Services'
import MarqueeSection from '../../components/custom/marquee'
import OurCasesSection from '../../components/custom/our-cases'
import WhyUsSection from '../../components/custom/why-us'
import FooterSection from '../../components/custom/footer'
import NavbarSection from '../../components/shad-react/Navbar'
import CookieBanner from '../../components/custom/cookie-banner'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-background text-foreground'>
      <NavbarSection />
      <HeroSectionV2 />
      <ServicesSection />
      <ChooseUsSection />
      <OurCasesSection />
      <MarqueeSection />
      <WhyUsSection />
      <FooterSection />
      <CookieBanner />
    </main>
  )
}
