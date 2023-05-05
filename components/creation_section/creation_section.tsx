import ItemsContainer from '../items_container/items_container'
import styles from './styles.module.css'

const CreationSection = () => {
    return (
        <section id="creations">
            {/* Creation Container */}
            <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                {/* Creation Header */}
                <div className="flex justify-center mb-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                         our creations
                    </h2>

                    <button className={`hidden ${styles.btn} md:block`}>
                        See All
                    </button>
                </div>

                   <div className={styles.container}>
              {/* Items Container */}
              <ItemsContainer 
                   mobileImage={'image-deep-earth.jpg'}
                   desktopImage={'image-deep-earth.jpg'}
                   title='Deep Earth'
                />

<ItemsContainer 
                   mobileImage={'image-night-arcade.jpg'}
                   desktopImage={'image-night-arcade.jpg'}
                   title='Night Arcade'
                />

<ItemsContainer 
                   mobileImage={'image-soccer-team.jpg'}
                   desktopImage={'image-soccer-team.jpg'}
                   title='Soccer Team VR'
                />

<ItemsContainer 
                   mobileImage={'image-grid.jpg'}
                   desktopImage={'image-grid.jpg'}
                   title='The Grid'
                />
                   </div>

                   {/* Item container 2 */}
                   <div className={styles.container}>
              {/* Items Container */}
              <ItemsContainer 
                   mobileImage={'image-from-above.jpg'}
                   desktopImage={'image-from-above.jpg'}
                   title='From Above VR'
                />

<ItemsContainer 
                   mobileImage={'image-pocket-borealis.jpg'}
                   desktopImage={'image-pocket-borealis.jpg'}
                   title='Pocket Borealis'
                />

<ItemsContainer 
                   mobileImage={'image-curiosity.jpg'}
                   desktopImage={'image-curiosity.jpg'}
                   title='The Curiosity'
                />

<ItemsContainer 
                   mobileImage={'image-fisheye.jpg'}
                   desktopImage={'image-fisheye.jpg'}
                   title='Make It Fisheye'
                />
                   </div>

                   {/* Bottom Button Container */}
                   <div className="flex justify-center mt-10 md:hidden">
                     <button className={`${styles.btn} btn w-full md:hidden`}>
                        See All
                     </button>
                   </div>
            </div>
        </section>
    )
}

export default CreationSection