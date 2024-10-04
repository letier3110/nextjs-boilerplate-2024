import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const items = [
  {
    question: 'Text 1',
    answer:
      'Answer 1'
  }, {
    question: 'Text 2',
    answer:
      'Answer 2'
  }, {
    question: 'Text 3',
    answer:
      'Answer 3'
  }, {
    question: 'Text 4',
    answer:
      'Answer 4'
  }, {
    question: 'Text 5',
    answer:
      'Answer 5'
  }, 
]

export default function Component() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='shadow-lg w-[750px]'>
        <CardContent className='p-6'>
          <h1 className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text text-3xl font-bold'>
            Frequently Asked Questions
          </h1>
          <Accordion className='w-full mt-4' type='multiple'>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className='hover:underline-none'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
