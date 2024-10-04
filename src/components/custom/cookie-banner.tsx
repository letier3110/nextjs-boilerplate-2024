'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useLocalStorage from '@/hooks/localstorage'

export default function Component() {
  const [value, setValue] = useLocalStorage('cookie_consent')
  const [isVisible, setIsVisible] = useState(value === null)

  if (!isVisible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg'>
      <div className='container mx-auto flex items-center justify-between'>
        <p className='text-sm mr-4'>
          By using our website, you consent to our use of cookies. You can manage your cookie preferences at any time.
        </p>
        <div className='flex items-center'>
          <a href='/cookies' className='text-sm underline mr-4'>
            read more
          </a>
          <Button
            variant='secondary'
            size='sm'
            className='mr-2'
            onClick={() => {
              setValue('true')
              setIsVisible(false)
            }}
          >
            Consent
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsVisible(false)}
            aria-label='Close cookie consent banner'
          >
            <X className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}
