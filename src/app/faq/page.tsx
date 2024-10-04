import FooterSection from '../../components/custom/footer'
import NavbarSection from '../../components/shad-react/Navbar'
import Faq from '@/components/custom/faq'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-background text-foreground'>
      <NavbarSection navigationMenu={false} />
      <Faq />
      <FooterSection />
    </main>
  )
}
