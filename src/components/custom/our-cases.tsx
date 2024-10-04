import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '../ui/badge'
import { COMPANY_SHORT } from '@/lib/constants'

const cases = [
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description:
      'Created a secure and scalable payment platform for online transactions, integrating advanced encryption and fraud detection systems.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  },
  {
    title: 'Some Text 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featureList: ['Chip1', 'Chip2', 'Chip3'],
    domain: 'ChipItem'
  }
]

export default function Component() {
  return (
    <section className='container py-12' id='cases'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center'>
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>Our</span>{' '}
        Experience
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6'>
        {cases.map((caseItem, id) => (
          <Card key={id} className='overflow-hidden'>
            <CardHeader className='p-0'>
              {/* <Image
                src={caseItem.image}
                alt={caseItem.title}
                width={300}
                height={200}
                className='w-full h-48 object-cover'
              /> */}
            </CardHeader>
            <CardContent className='p-4'>
              <CardTitle className='text-xl mb-2 flex justify-between'>
                {caseItem.title}
                {caseItem.domain && <Badge variant='default'>{caseItem.domain}</Badge>}
              </CardTitle>
              {/* <div className='flex flex-row gap-2 pb-2 items-center'>
                {caseItem.featureList.map((feature: string) => (
                  <Badge key={feature} variant='secondary' className='text-sm'>
                    {feature}
                  </Badge>
                ))}
              </div> */}
              <p className='text-base text-current'>{caseItem.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className='text-center text-secondary text-sm mt-4'>
        All product names, logos, and brands are property of their respective owners and are used here for
        identification purposes only. Use of such names, logos, and brands does not imply endorsement or affiliation
        with {COMPANY_SHORT}.
      </p>
    </section>
  )
}
