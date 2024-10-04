import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EMAIL } from '@/lib/constants'

export default function PrivacyPolicy() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='inline bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text text-3xl font-bold'>
        Privacy Policy
      </h1>

      <Card className='mt-6 mb-6'>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Welcome to our Privacy Policy. Your privacy is critically important to us. This policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            We collect information from you when you visit our site, register on our site, place an order, subscribe to
            our newsletter, respond to a survey, fill out a form, or enter information on our site.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>We may use the information we collect from you in the following ways:</p>
          <ul className='list-disc list-inside mb-4'>
            <li>
              To personalize your experience and to allow us to deliver the type of content and product offerings in
              which you are most interested.
            </li>
            <li>To improve our website in order to better serve you.</li>
            <li>To allow us to better service you in responding to your customer service requests.</li>
            <li>To administer a contest, promotion, survey, or other site feature.</li>
            <li>To quickly process your transactions.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>How We Protect Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your
            visit to our site as safe as possible. We use regular Malware Scanning. Your personal information is
            contained behind secured networks and is only accessible by a limited number of persons who have special
            access rights to such systems, and are required to keep the information confidential.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Sharing Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
            unless we provide users with advance notice. This does not include website hosting partners and other
            parties who assist us in operating our website, conducting our business, or serving our users, so long as
            those parties agree to keep this information confidential.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Third-Party Links</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website.
            These third-party sites have separate and independent privacy policies. We therefore have no responsibility
            or liability for the content and activities of these linked sites.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Changes to This Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </CardContent>
      </Card>

      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href={`mailto:${EMAIL}`} className='hover:text-primary transition-colors'>
              {EMAIL}
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
