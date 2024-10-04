import { Accordion, AccordionItem, AccordionContent } from '@/components/ui/accordion'
import { AccordionHeader } from '@radix-ui/react-accordion'
import { FastForward, Target, Users } from 'lucide-react'
import { StaticImageData } from 'next/image'

interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
  image?: StaticImageData
}

const features: FeatureProps[] = [
  {
    icon: <Users className='stroke-primary' />,
    title: 'Title1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    icon: <FastForward className='stroke-primary' />,
    title: 'Title2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    icon: <Target className='stroke-primary' />,
    title: 'Title3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

export default function Features() {
  return (
    <section id='choose' className='container py-12 space-y-8'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center'>
        Why <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>Choose</span>{' '}
        Us?
      </h2>

      <div className='mx-auto mt-4 mb-8'>
        <Accordion
          className='w-full mt-4 gap-4'
          type='multiple'
          defaultValue={features.map((feature) => feature.title)}
        >
          {features.map(({ title, description, icon }: FeatureProps) => (
            <AccordionItem key={title} value={title} datatype='open' className='bg-muted/50 w-full'>
              <AccordionHeader className='flex items-center gap-4 p-4 text-curent'>
                {icon}
                <h3 className='text-2xl font-semibold leading-none tracking-tight'>{title}</h3>
              </AccordionHeader>
              <AccordionContent className='mx-4 text-base text-left text-current'>{description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
