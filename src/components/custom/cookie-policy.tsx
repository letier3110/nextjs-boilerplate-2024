import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { COMPANY } from '@/lib/constants'

export default function CookiePolicy() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text text-3xl font-bold mb-6'>
        Cookie Policy
      </h1>

      <Card className='mt-6 mb-6'>
        <CardHeader>
          <CardTitle>What are cookies?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide a better user experience.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>How we use cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>We use cookies for the following purposes:</p>
          <ul className='list-disc list-inside mb-4'>
            <li>To provide essential website functionality</li>
            <li>To remember your preferences</li>
            <li>To analyze and improve our website performance</li>
            <li>To personalize your experience</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Types of cookies we use</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry
            standard options for disabling cookies without completely disabling the functionality and features they add
            to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or
            not in case they are used to provide a service that you use.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Disabling Cookies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for
            how to do this). Be aware that disabling cookies will affect the functionality of this and many other
            websites that you visit. Disabling cookies will usually result in also disabling certain functionality and
            features of this site. Therefore, it is recommended that you do not disable cookies.
          </p>
          <p className='mb-4'>
            {COMPANY} Cookie Consent tool can be utilized to customize your cookie preferences. The tool will record when
            you have consented to our cookie policy and will ask for consent periodically to ensure users stay
            up-to-date with changes to our cookie and privacy policies. The consent tool specifically controls the
            marketing cookies and analytical cookies set by using {COMPANY} website. Essential cookies cannot be disabled.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>The Cookies We Set</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            If you create an account with us, then we will use cookies for the management of the signup process and
            general administration. These cookies will usually be deleted when you log out; however, in some cases they
            may remain afterwards to remember your site preferences when logged out.
          </p>
          <p className='mb-4'>
            <strong>Login related cookies</strong>
            <br />
            We use cookies when you are logged in so that we can remember that you are logged in. This prevents you from
            having to log in every single time you visit a new page. These cookies are typically removed or cleared when
            you log out to ensure that you can only access restricted features and areas when logged in.
          </p>
          <p className='mb-4'>
            <strong>Email newsletters related cookies</strong>
            <br />
            This site offers newsletter or email subscription services and cookies may be used to remember if you are
            already registered and whether to show certain notifications which might only be valid to
            subscribed/unsubscribed users.
          </p>
          <p className='mb-4'>
            <strong>Forms related cookies</strong>
            <br />
            When you submit data to us through a form such as those found on contact pages or comment forms, cookies may
            be set to remember your user details for future correspondence.
          </p>
          <p className='mb-4'>
            <strong>Essential cookies</strong>
            <br />
            Essential cookies and scripts are essential for our website to function. They allow visitors to move around
            our website and use its basic features, such as accessing secure areas of the website, opening navigation,
            and displaying content.
          </p>
          <p className='mb-4'>
            <strong>Analytics</strong>
            <br />
            Analytics allow us to count visits and traffic sources to the website, so that we can measure and improve
            the performance of our site. Analytics let us know which pages are the most and least popular and see how
            visitors move around the site. All of the information collected from analytics cookies is aggregated so it
            is anonymous.
          </p>
          <p className='mb-4'>
            <strong>Marketing</strong>
            <br />
            We use only a few third party cookies. We use Facebook, LinkedIn, and Google's pixels to track our marketing
            efforts.
          </p>
          <p className='mb-4'>
            <strong>Personalization</strong>
            <br />
            These cookies and scripts allow us to remember choices you make (such as your user name and language) and
            provide enhanced, more personal features for you.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cookie Consent</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            By using our website, you consent to our use of cookies. You can manage your cookie preferences at any time.
          </p>
          <form action='/api/cookie-consent' className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Checkbox id='essential' name='essential' defaultChecked disabled />
              <Label htmlFor='essential'>Essential Cookies (Required)</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='analytical' name='analytical' />
              <Label htmlFor='analytical'>Analytical Cookies</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='functional' name='functional' />
              <Label htmlFor='functional'>Functional Cookies</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='targeting' name='targeting' />
              <Label htmlFor='targeting'>Targeting Cookies</Label>
            </div>
            <Button type='submit'>Save Preferences</Button>
          </form>
        </CardContent>
        {/* <CardFooter>
          <p className='text-sm text-gray-500'>
            For more information about our use of cookies, please see our full Cookie Policy.
          </p>
        </CardFooter> */}
      </Card>
    </div>
  )
}
