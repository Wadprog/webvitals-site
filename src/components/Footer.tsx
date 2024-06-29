import Section from './Section'
import logo from '../assets/logo.png'
import Paragraph from './Paragraph'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <Section graybackground centerItems>
        <div className="sm:grid grid-cols-4 flex gap-4 flex-col sm:gap-8">
          <div>
            <img src={logo} alt="Google" className="w-[50px]" />
            <Paragraph
              body="
            We are a custom software development company that guarantees the
            successful delivery of your project. We are a team of experts in
            software"
            />
          </div>
          <div>
            <b>Link</b>
            <ul>
              <li>
                <a>
                  <Paragraph body="About" /> us
                </a>
              </li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>How it works</li>
              <li>Hire</li>
            </ul>
          </div>
          <div>
            <b>Contact Us</b>
            <div>
              <Paragraph body="143 Grande Valencia Dr, Orlando, FL 32825" />
              <br />
              <Paragraph body="+6468374551" />
              <Paragraph body="info@webvitals.org" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <b></b>
            <ul className="flex gap-4 justify-center sm:justify-start">
              <li className="p-3 bg-white rounded-full shadow-lg text-black">
                <FaTwitter />
              </li>
              <li className="p-3 bg-white rounded-full shadow-lg text-black">
                <FaFacebook />
              </li>
              <li className="p-3 bg-white rounded-full shadow-lg text-black">
                <FaInstagram />
              </li>
              <li className="p-3 bg-white rounded-full shadow-lg text-black">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <hr />
      <Section graybackground centerItems>
        <Paragraph
          body={`© ${new Date().getFullYear()} WebVitals ORG LLC. All Rights Reserved.`}
        />
      </Section>
    </div>
  )
}

export default Footer
