import { Accordion, AccordionItem, AccordionContent } from '@/components/ui/accordion'
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from './Icons'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { ClipboardCheck, HelpCircle, BriefcaseBusiness, Code, RefreshCw } from 'lucide-react'
import Timeline from '../custom/timeline'

interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}

const features: FeatureProps[] = [
  {
    icon: <HelpCircle className='stroke-primary' />,
    title: 'Title X',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    icon: <ClipboardCheck className='stroke-primary' />,
    title: 'Title X',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    icon: <BriefcaseBusiness className='stroke-primary' />,
    title: 'Title X',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    icon: <Code className='stroke-primary' />,
    title: 'Title X',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    icon: <RefreshCw className='stroke-primary' />,
    title: 'Title X',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  }
]

export default function HowItWorks() {
  return (
    <section id='services' className='container text-center py-12'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center'>
        Our <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>Services </span>
      </h2>
      <p className='lg:max-w-[75%] mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Timeline />

      <div className='mx-auto mt-4'>
        <Accordion
          className='w-full mt-4 gap-4'
          type='multiple'
          defaultValue={features.map((feature) => feature.title)}
        >
          {features.map(({ icon, title, description }: FeatureProps) => (
            <AccordionItem key={title} value={title} datatype='open' className='bg-muted/50 w-full'>
              <AccordionHeader className='flex items-center gap-4 p-4 text-curent'>
                {icon}
                <h3 className='text-2xl font-semibold leading-none tracking-tight'>{title}</h3>
              </AccordionHeader>
              <AccordionContent className='mx-4 text-base text-left text-curent'>{description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
