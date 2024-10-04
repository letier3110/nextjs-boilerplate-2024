import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfService() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text text-3xl font-bold'>
        Terms of Service
      </h1>

      <Card className='mt-6 mb-6'>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Welcome to our website. By accessing or using our site, you agree to comply with and be bound by the
            following terms and conditions of use, which together with our privacy policy govern our relationship with
            you in relation to this website.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Use of the Site</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            You agree to use the site only for lawful purposes and in a way that does not infringe the rights of,
            restrict, or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or
            causing distress or inconvenience to any other user, transmitting obscene or offensive content, or
            disrupting the normal flow of dialogue within our site.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            All content included on the site, such as text, graphics, logos, images, and software, is the property of
            our company or its content suppliers and is protected by international copyright laws. The compilation of
            all content on this site is the exclusive property of our company, with copyright authorship for this
            collection by our company, and protected by international copyright laws.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            The information on this site is provided on an "as is" basis. To the fullest extent permitted by law, this
            company excludes all representations and warranties relating to this website and its contents, including in
            relation to any inaccuracies or omissions in this website and/or the company's literature.
          </p>
          <p className='mb-4'>
            This company excludes all liability for damages arising out of or in connection with your use of this
            website. This includes, without limitation, direct loss, loss of business or profits (whether or not the
            loss of such profits was foreseeable, arose in the normal course of things or you have advised this company
            of the possibility of such potential loss), damage caused to your computer, computer software, systems and
            programs and the data thereon or any other direct or indirect, consequential and incidental damages.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Changes to These Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            We reserve the right to make changes to these terms at any time. Your continued use of the site will signify
            your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will
            announce that these changes have been made on our home page and on other key pages on our site. If there are
            any changes in how we use our site customers' Personally Identifiable Information, notification by email or
            postal mail will be made to those affected by this change. Any changes to our privacy policy will be posted
            on our site 30 days prior to these changes taking place. You are therefore advised to re-read this statement
            on a regular basis.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            If you have any questions about these Terms, please contact us at [contact information].
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
