import styles from './styles.module.css'

interface ItemsContainerProps{
    mobileImage: String
    desktopImage: String
    title: String
}

const ItemsContainer = ({mobileImage, desktopImage, title} : ItemsContainerProps) => {
    return (
            <div className={`group ${styles.item}`}>
                <img src={`${'images/desktop/'}${desktopImage}`} className="hidden w-full duration-200 md:block group-hover:scale-110"/>
                <img src={`${'images/mobile/'}${mobileImage}`} className="w-full md:hidden"/>
                {/* Item Gradient */}
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-trasparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
               
                {/* Item Text */}
                <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                    { title }
                </h5>
        </div>
    )
}

export default ItemsContainer