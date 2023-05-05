import NavBar from "components/navbar/navbar"
import styles from './styles.module.css'

interface IHeroProps {
  click: () => {}
  isOpen: boolean
}

const Hero = ({click, isOpen}: IHeroProps) => {
    return (
        <>
          <section id={styles.hero}>
            <div className="container max-w-6xl mx-auto px-6 py-12">
                {/* Nav/Logo COntainer */}
                 <NavBar
                 click={click}
                 isOpen={isOpen}
                 />

                 {/* TODO Mobile Menu */}
                 <div id="menu" className={`${isOpen ? 'flex' : 'hidden'} flex-col  absolute top-0 bottom-9 left-0 self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}>
                  <a href="#" className="hover:text-pink-500">About</a>
                  <a href="#" className="hover:text-pink-500">Careers</a>
                  <a href="#" className="hover:text-pink-500">Events</a>
                  <a href="#" className="hover:text-pink-500">Product</a>
                  <a href="#" className="hover:text-pink-500">Support</a>
                 </div>

                 {/* Borderd Text */}
                 <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl rounded-md">
                    Impressive Experiences That Deliver
                 </div>
            </div>
          </section>
        </>
    )
}

export default Hero