'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { ADDRESS, EMAIL, PHONE } from '@/lib/constants'

const companyName = 'Company Name'

const sitemap = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Our Services',
    href: '/#services'
  },
  {
    title: 'Why Choose Us',
    href: '/#choose'
  },
  {
    title: 'Our Experience',
    href: '/#cases'
  },
  {
    title: 'About Us',
    href: '/#reachus'
  },
  {
    title: 'Contacts',
    href: '/#contacts'
  }
]

const legal = [
  {
    title: 'Terms of Service',
    href: '/terms'
  },
  {
    title: 'Privacy Policy',
    href: '/privacy'
  },
  {
    title: 'Cookie Policy',
    href: '/cookies'
  }
]

const support = [
  {
    title: 'FAQ',
    href: '/faq'
  },
  {
    title: 'Contact Us',
    href: '/contact'
  },
  {
    title: 'Customer Support',
    href: '/support'
  }
]

export default function Component() {
  return (
    <motion.footer
      id='contacts'
      className='w-full py-6 bg-dark'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Sitemap */}
          <div className=''>
            <h3 className='text-lg font-semibold mb-4'>Sitemap</h3>
            <ul className='space-y-2'>
              {sitemap.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-primary transition-colors'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-lg font-semibold mb-4 self-start'>Legal</h3>
            <ul className='space-y-2 text-left'>
            {legal.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-primary transition-colors'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Support</h3>
            <ul className='space-y-2'>
            {support.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className='hover:text-primary transition-colors'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <Phone className='w-5 h-5 mr-2' />
                <a href='tel:+15551234567' className='hover:text-primary transition-colors'>
                  {PHONE}
                </a>
              </li>
              <li className='flex items-center'>
                <Mail className='w-5 h-5 mr-2' />
                <a href={`mailto:${EMAIL}`} className='hover:text-primary transition-colors'>
                  {EMAIL}
                </a>
              </li>
              <li className='flex items-start'>
                <MapPin className='w-5 h-5 mr-2 mt-1' />
                <a
                  href='https://goo.gl/maps/123'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12 text-center text-sm'>© {new Date().getFullYear()} {companyName}. All rights reserved.</div>
      </div>
    </motion.footer>
  )
}
