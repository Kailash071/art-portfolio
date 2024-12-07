import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Théo Dupont",
    image: "sdfs",
    text: "I've been playing Pick 3 and it's absolutely thrilling! The daily chance to win keeps me coming back, and the bonuses on deposits are just the cherry on top. Highly recommended for anyone looking for quick and fun rewards!",
  },
  {
    name: "Emma Johnson",
    image: "/placeholder.svg?height=100&width=100",
    text: "The user experience is fantastic! I love how easy it is to navigate and play. The rewards are great, and the customer support is top-notch.",
  },
  {
    name: "Michael Chen",
    image: "/placeholder.svg?height=100&width=100",
    text: "As a casual player, I appreciate the simplicity of Pick 3. It's a perfect blend of excitement and accessibility. The bonuses keep things interesting!",
  },
  {
    name: "James S.",
    image: "/placeholder.svg?height=100&width=100",
    text: "As a casual player, I appreciate the simplicity of Pick 3. It's a perfect blend of excitement and accessibility. The bonuses keep things interesting!",
  },
  {
    name: "Johhny A",
    image: "/placeholder.svg?height=100&width=100",
    text: "As a casual player, I appreciate the simplicity of Pick 3. It's a perfect blend of excitement and accessibility. The bonuses keep things interesting!",
  },
]

export default function TestimonialSection() {
  return (
    <>
    <div className="blue-diveder"></div>
    <div className="bg-blue">
    <section className="  py-10 md:py-20 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl md:text-[38px] font-normal mb-8 md:mb-12 lg:mb-20 text-center">
        Client&apos;s Testimonial
      </h2>
      <Carousel opts={{ align: "center" }} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-4 pl-3 md:pl-6 " key={index}>
              <div className="bg-gray-100 rounded-2xl pt-3 pb-6 px-6 flex flex-col items-center text-center relative transform transition-all duration-300 hover:scale-105 shadow-md "> {/* Set a fixed height */}
                <Avatar className="w-24 h-24 ring-4 ring-200">
                  <AvatarImage
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="text-800 text-2xl">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-900 mb-4 mt-4 text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-800 italic overflow-hidden h-24 overflow-ellipsis text-blue-400 "> {/* Apply line clamp */}
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-4 right-16 flex gap-2">
        <CarouselPrevious />
        <CarouselNext />
        </div>
      </Carousel>
    </section>
    </div>
    </>
  )
}