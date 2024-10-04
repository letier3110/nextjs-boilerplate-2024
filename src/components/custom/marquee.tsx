import { cn } from '@/lib/utils'
// import {
//   CryptoIcon,
//   EnergyIcon,
//   FinanceIcon,
//   GovtechIcon,
//   HealthIcon,
//   LogisticsIcon,
//   RetailIcon
// } from '../shad-react/Icons'

// const reviews = [
//   {
//     name: 'Transportation and Logistics',
//     img: <LogisticsIcon />
//   },
//   {
//     name: 'Retail',
//     img: <RetailIcon />
//   },
//   {
//     name: 'Health & Fitness',
//     img: <HealthIcon />
//   },
//   {
//     name: 'Energy',
//     img: <EnergyIcon />
//   },
//   {
//     name: 'FinTech',
//     img: <FinanceIcon />
//   },
//   {
//     name: 'GovTech',
//     img: <GovtechIcon />
//   },
//   {
//     name: 'Crypto',
//     img: <CryptoIcon />
//   }
// ]

// const firstRow = reviews.slice(0, reviews.length / 2)
// const secondRow = reviews.slice(reviews.length / 2)
// const thirdRow = reviews.filter((_, i) => i % 2 === 0)
// const fourthRow = reviews.filter((_, i) => i % 2 !== 0)

interface ReviewCardProps {
  img?: React.ReactNode
  name: string
  username?: string
  body?: string
}

const ReviewCard = ({ img, name }: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'light:border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.1] dark:hover:bg-gray-50/[.05]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        {img ? img : null}
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>{name}</figcaption>
        </div>
      </div>
      {/* <blockquote className='mt-2 text-sm'>{body}</blockquote> */}
    </figure>
  )
}

export default function MarqueeSection() {
  return (
    <div
      id='reachus'
      // className='relative flex h-[400px] w-full flex-col items-center overflow-hidden rounded-lg bg-background py-12'
      className='relative flex w-full flex-col items-center overflow-hidden rounded-lg bg-background pt-12'
    >
      {/* <Marquee reverse className='[--duration:25s] delay-150'>
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className='[--duration:15s] delay-350'>
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className='[--duration:20s] delay-550'>
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className='[--duration:17s]'>
        {fourthRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className='absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-transparent to-background to-70% dark:to-background'></div> */}

      {/* <div className='absolute z-10 h-[390px] flex flex-col items-center justify-end'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <div className='space-y-2 flex flex-col items-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-6'>
              <span className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text'>
                About
              </span>{' '}
              Us
            </h2>
          </div>
        </div>
      </div> */}
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-center z-10'>
        <span className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text'>About</span>{' '}
        Us
      </h2>
    </div>
  )
}
