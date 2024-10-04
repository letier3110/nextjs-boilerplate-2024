// import video from '../assets/bg.mp4'

import { BrainIcon, CheckCircleIcon, CloudIcon, CodeIcon, SettingsIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { COMPANY } from '@/lib/constants'

const features: FeatureProps[] = [
  {
    icon: <CodeIcon className='stroke-primary' />,
    title: 'Exp1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: <BrainIcon className='stroke-primary' />,
    title: 'Exp2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: <CloudIcon className='stroke-primary' />,
    title: 'Exp2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: <CheckCircleIcon className='stroke-primary' />,
    title: 'Exp2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: <SettingsIcon className='stroke-primary' />,
    title: 'Exp2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

interface FeatureProps {
  icon: JSX.Element
  title: string
  description: string
}

export default function Hero() {
  return (
    <section className='container py-12'>
      <div className='text-center space-y-6 z-10 py-12'>
        <main className='font-bold'>
          <h1 className='inline text-5xl md:text-6xl'>
            <span className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text'>
              Your Company
            </span>
            {', Our Slogan'}
          </h1>{' '}
        </main>

        <p className='w-full text-xl text-center text-muted-foreground mx-auto lg:mx-0'>
          Welcome to {COMPANY}, lorem ipsum our slogan
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>

      {/* Shadow effect */}
      <div className='shadowAnim'></div>
    </section>
  )
}
