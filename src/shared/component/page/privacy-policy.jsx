// @flow

import React from 'react'

const LAST_UPDATED = '4/28/2017'
const items = [
  {
    header: 'Information Collection And Use',
    body: `While using our Site, we may ask you to provide us with certain personally
          identifiable information that can be used to contact or identify you. Personally
          identifiable information may include, but is not limited to your name ("Personal Information").`,
  },
  {
    header: 'Log Data',
    body: `Like many site operators, we collect information that your browser sends whenever you
          visit our Site ("Log Data"). This Log Data may include information such as your computer's
          Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that
          you visit, the time and date of your visit, the time spent on those pages and other statistics.
          In addition, we may use third party services such as Google Analytics that collect, monitor and
          analyze this data. The Log Data section is for businesses that use analytics or tracking services
          in websites or apps, like Google Analytics`,
  },
  {
    header: 'Communications',
    body: `We may use your Personal Information to contact you with newsletters, marketing or promotional
          materials. The Communications section is for businesses that may contact users via email (email
          newsletters) or other methods.`,
  },
  {
    header: 'Cookies',
    body: `Cookies are files with small amount of data, which may include an anonymous unique identifier.
          Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like
          many sites, we use "cookies" to collect information. You can instruct your browser to refuse all
          cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may
          not be able to use some portions of our Site.`,
  },
  {
    header: 'Security',
    body: `The security of your Personal Information is important to us, but remember that no method of
          transmission over the Internet, or method of electronic storage, is 100% secure. While we strive
          to use commercially acceptable means to protect your Personal Information, we cannot guarantee its
          absolute security.`,
  },
  {
    header: 'Changes To This Privacy Policy',
    body: `This Privacy Policy is effective as of ${LAST_UPDATED} and will remain in effect except with respect to any
           changes in its provisions in the future, which will be in effect immediately after being posted on this page.

           We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy
           Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy
           on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound
           by the modified Privacy Policy.

           If we make any material changes to this Privacy Policy, we will notify you either through the email address
           you have provided us, or by placing a prominent notice on our website.`,
  },
  {
    header: 'Contact Us',
    body: 'If you have any questions about this Privacy Policy, please contact us at taka@braquet.io.',
  },
]

const PrivacyPolicyPage = () => (
  <section className="container-fluid mt-5 mb-5 ml-md-5 mr-md-5 ml-0 mr-0 pb-4">
    <h2 className>Privacy Policy</h2>
    <h6 className="pb-4">Last updated: {LAST_UPDATED}</h6>

    <p>
      {`Braquet Inc. ("us", "we", or "our") operates http://www.braquet.io (the "Site").
      This page informs you of our policies regarding the collection, use and disclosure
      of Personal Information we receive from users of the Site.`}
    </p>

    <p>
      We use your Personal Information only for providing and improving the Site. By using
      the Site, you agree to the collection and use of information in accordance with this policy.
    </p>

    {items.map(item => (
      <section key={item.header} className="list-view">
        <div className="content no-wrap title-content mb-4">
          <h4>{item.header}</h4>
          <div>
            <p>
              {item.body}
            </p>
          </div>
        </div>
      </section>
    ))}
  </section>
)

export default PrivacyPolicyPage
