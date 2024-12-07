import Image, { StaticImageData } from 'next/image'
import image1 from "@/public/service1.webp";
import image2 from "@/public/service2.webp";
import image3 from "@/public/service3.webp";
import image4 from "@/public/service4.webp";
import image5 from "@/public/service5.webp";
import image6 from "@/public/service6.webp";
import Link from 'next/link';

interface Service {
  title: string
  description: string
  imageUrl: StaticImageData
}

const services: Service[] = [
  {
    title: "Product Packaging",
    description: "Packaging that speaks volumes without saying a word. Quite literally!",
    imageUrl: image1
  },
  {
    title: "Feature Walls & Signage",
    description: "Custom-designed visuals that spark conversations and uplift your environment.",
    imageUrl: image2
  },
  {
    title: "Personalized Illustration",
    description: "Celebrate life's milestones with personalized art that captures the essence of your event.",
    imageUrl: image3
  },
  {
    title: "Digital Illustrations",
    description: "Illustrations that capture your brand's story, engage your audience, and drive action.",
    imageUrl: image4
  },
  {
    title: "Merchandise Design",
    description: "Unique lifestyle products that spark joy and express your individuality.",
    imageUrl: image5
  },
  {
    title: "Book Illustrations",
    description: "Original illustrations that breathe life into your narratives, resonating with a broad audience and setting your book apart.",
    imageUrl: image6
  }
]

export default function ServicesOffered() {
  return (
    <section className="py-12 bg-background" id='services'>
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-2xl md:text-[38px] font-normal mb-8 md:mb-12 lg:mb-20 text-center">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 place-items-center">
          {services.map((service, index) => (
            <div key={index} className="bg-card flex flex-col  overflow-hidden">
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={252}
                height={348}
                className='rounded-lg'
              />
                <h3 className="font-bold text-xl mb-2 mt-2">{service.title}</h3>
                <p className="text-muted-foreground w-64">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="mb-4 text-muted-foreground">
            From individuals to enterprises, we bring your stories to life with quirky, character-rich illustrations.
          </p>
          <Link href='/work' role='button' className='btn_dark flex-shrink-0'>See work sample</Link>
        </div>
      </div>
    </section>
  )
}