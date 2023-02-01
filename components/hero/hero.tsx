import NavBar from "components/navbar/navbar"
import styles from './styles.module.css'

const Hero = () => {
    return (
        <>
          <section id={styles.hero}>
            <div className="container max-w-6xl mx-auto px-6 py-12">
                {/* Nav/Logo COntainer */}
                 <NavBar />
                 {/* TODO Mobile Menu */}

                 {/* Borderd Text */}
                 <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
                    Impressive Experiences That Deliver
                 </div>
            </div>
          </section>
        </>
    )
}

export default Hero