import FooterSection from '../../components/custom/footer'
import NavbarSection from '../../components/shad-react/Navbar'
import Support from '@/components/custom/support'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-background text-foreground'>
      <NavbarSection navigationMenu={false} />
      <Support />
      <FooterSection />
    </main>
  )
}
