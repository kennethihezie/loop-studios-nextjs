import ItemsContainer from '../items_container/items_container'
import styles from './styles.module.css'

const CreationSection = () => {
    return (
        <section id="creations">
            {/* Creation Container */}
            <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                {/* Creation Header */}
                <div className="flex justify-center md-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                         our creations
                    </h2>

                    <button className={`hidden ${styles.btn} md:block`}>
                        See All
                    </button>
                </div>

                {/* Items Container */}
                <ItemsContainer 
                   mobileImage={'image-deep-earth.jpg'}
                   desktopImage={'image-deep-earth.jpg'}
                   title='Deep Earth'
                />

<ItemsContainer 
                   mobileImage={'image-deep-earth.jpg'}
                   desktopImage={'image-deep-earth.jpg'}
                   title='Deep Earth'
                />

<ItemsContainer 
                   mobileImage={'image-deep-earth.jpg'}
                   desktopImage={'image-deep-earth.jpg'}
                   title='Deep Earth'
                />

<ItemsContainer 
                   mobileImage={'image-deep-earth.jpg'}
                   desktopImage={'image-deep-earth.jpg'}
                   title='Deep Earth'
                />
            </div>
        </section>
    )
}

export default CreationSection