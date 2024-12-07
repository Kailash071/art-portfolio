import Image from "next/image"
import banner1 from "@/public/home-banner1.png"
import banner2 from "@/public/home-banner2.png"
import TestimonialSection from "../_components/UI/Testimonials"
import ServicesOffered from "../_components/UI/HomeServices"
import Link from "next/link"
import { LuFacebook, LuInstagram } from "react-icons/lu"

export default function Component() {
  return (
    <main className="flex-grow w-full">
      <section className="bg-white py-3 px-4 md:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col   gap-5 lg:gap-10 justify-start" style={{alignItems:'start'}}>
          <h1 className="text-2xl md:text-5xl font-normal">
              Beyond the  <span className="block">Spoken and Written.</span>
            </h1>
            <p className="text-lg">
              Bhavya Desai Illustrations studio, with over 11 years of
              experience, has been working with leading brands to celebrate the
              unique culture of India through illustrations.
            </p>
            <p className="text-lg">
              Our work is inspired by the vibrant landscapes, the quaint
              details, and the everyday beauty of Indian life.
            </p>
            <button
              type="button"
              className="  btn_dark "
            >
              Let&apos;s connect
            </button>
          </div>
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">150+</p>
                <p>clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-500">12782</p>
                <p>drawing hours</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">2039</p>
                <p>cups of coffee</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={banner1}
              alt="Cartoon cat at desk"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <div className="bg-yellow">

      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center  md:gap-10">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={banner2}
              alt="Cartoon character driving forklift"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
          <div className="flex flex-col gap-4 lg:gap-8">
          <h2 className="text-2xl md:text-[38px] font-normal">
              Why illustrations?
            </h2>
            <p className="text-md md:text-[24px] mb-0">Don&apos;t Just Tell Your Story, <span className="block">Illustrate It!</span></p>
            <p className="text-sm md:text-md ">
              Stand out with illustrations that infuse uniqueness and <span className="block">humor,
              turning your brand&apos;s story into a visual experience.</span>
            </p>
          </div>
          </div>
        </div>
      </section>
      
      </div>
      <ServicesOffered/>
      <TestimonialSection />
      <section id="connect" className="py-12 px-4 md:px-6 lg:px-8 bg-gray-100">
  <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Let&apos;s Connect!</h2>
  <p className="text-lg mb-6 text-center">We&apos;d love to hear from you. Reach out to us through any of the following methods:</p>
  
  <div className="w-full flex flex-col items-center space-y-4">
    <div className="flex space-x-6">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
        <LuFacebook/>
      </Link>
      
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
       <LuInstagram/>
      </Link>
    </div>
    <div className="text-center">
      <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+91 97384-28381</a></p>
      <p className="text-lg">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
    </div>
  </div>
     </section>
     <hr />
    </main>
  )
}
