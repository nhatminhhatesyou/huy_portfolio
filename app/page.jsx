import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full px-3">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Marketing Executive</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Aaron Vu</span>
            </h1>
            <p className="max-w-[520px] mb-9 text-white/80">
              I'm Aaron Vu, a marketing professional with a strong foundation in finance and digital marketing. Currently pursuing a Master of Management (Marketing) at the University of Melbourne, I bring a unique blend of creativity and analytical thinking to everything I do.

            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1FP81HPfy743DbsuRvqCKDclWevODilXU/edit" target="_blank">
                <Button variant="outline" size='lg' className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}

          <div className="relative order-1 xl:order-none mb-8 xl:mb-0 ">
            {/* overlay */}
            <div className="absolute  w-full h-full z-10 "></div>
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  )
}

export default Home