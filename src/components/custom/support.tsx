'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EMAIL } from '@/lib/constants'

export default function Component() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoLink = `mailto:${EMAIL}?subject=Support%20Form%20Submission&body=First%20Name:%20${encodeURIComponent(
    firstName
  )}%0ALast%20Name:%20${encodeURIComponent(lastName)}%0AEmail:%20${encodeURIComponent(
    email
  )}%0AMessage:%20${encodeURIComponent(message)}`

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='shadow-lg w-[550px]'>
        <CardHeader>
          <CardTitle>
            <h1 className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text text-3xl font-bold'>
              Customer Support
            </h1>
          </CardTitle>
          <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='first-name'>First Name</Label>
              <Input
                id='first-name'
                placeholder='Enter your first name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='last-name'>Last Name</Label>
              <Input
                id='last-name'
                placeholder='Enter your last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              placeholder='Enter your message'
              className='min-h-[100px]'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <a href={mailtoLink} target='_blank' rel='noopener noreferrer'>
            <Button>Submit</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
