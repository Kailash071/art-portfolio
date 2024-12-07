"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useState, useTransition } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { categories, projects } from "@/lib/dummy"

export default function Portfolio() {
  const [isPending, startTransition] = useTransition()
  const [selectedCategory, setSelectedCategory] = useState("all")
  function selectTab(nextTab: string) {
    startTransition(() => {
      setSelectedCategory(nextTab)
    })
  }
  console.log("selectedCategory", selectedCategory)
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)
  console.log("filteredProjects", filteredProjects)
  return (
    <div className="container  px-4 py-8 lg:py-16 mx-auto max-w-screen-lg work-cards">
      <h2 className="text-2xl md:text-5xl font-normal text-center  mb-10 md:mb-20">
        Check out our work!
      </h2>
      <Tabs defaultValue="all">
        
          {/* Carousel for mobile devices */}
          <div className="lg:hidden">
          <TabsList className="w-full flex space-x-3 bg-white  p-1 mt-3 mb-8">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {categories.map((category) => (
                  <CarouselItem
                    className="basis-auto w-auto my-5 mx-1 "
                    key={category.id}
                    onClick={() => selectTab(category.id)}
                  >
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={`rounded-2xl p-2.5 text-md font-bold leading-5 
              ring-2 ring-black`}
                    >
                      {category.name}
                    </TabsTrigger>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-[-10px] right-10 flex gap-1 ">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            </TabsList>
          </div>
          {/* Standard tab list for large devices */}
          <div className="hidden lg:flex w-full space-x-3 bg-white p-1 mt-3 mb-3">
          <TabsList className="w-full flex space-x-3 bg-white  p-1 mt-3 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`rounded-3xl py-2.5 px-5 text-md font-bold leading-5 
        ring-2 ring-black`}
                onClick={() => selectTab(category.id)}
              >
                {category.name}
              </TabsTrigger>
            ))}
        </TabsList>
          </div>
        <>
          <div className="mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isPending &&
              Array.from({ length: 3 }).map((_, index) => (
                <div className="flex flex-col space-y-3" key={index}>
                  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            {selectedCategory !== "all"
              ? filteredProjects.map((project) => (
                  <TabsContent
                    value={project.category}
                    key={project.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 capitalize">
                        {project.category}
                      </p>
                    </div>
                  </TabsContent>
                ))
              : filteredProjects.map((project) => (
                  <TabsContent
                    value="all"
                    key={project.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 capitalize">
                        {project.category}
                      </p>
                    </div>
                  </TabsContent>
                ))}
          </div>
        </>
      </Tabs>
    </div>
  )
}
