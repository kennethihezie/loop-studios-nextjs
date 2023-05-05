import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-black">
           <div className="container max-w-6xl py-10 mx-auto">
            {/* Footer Flex Container */}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* menu and logo container */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                    {/* Logo */}
                    <div className="h-8">
                        <Image
                        className="w-44 md:ml-3"
                        src={'images/logo.svg'}
                        width={44}
                        height={35}
                        alt='none'
                        priority/>
                    </div>

                    {/* menu container */}
                    <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        {/* item one */}
                        <div className="h-10 group">
                            <a href="#">About</a>
                            <div className="group-hover:border-b group-hover:border-blue-100"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="#">Careers</a>
                            <div className="group-hover:border-b group-hover:border-blue-100"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="#">Events</a>
                            <div className="group-hover:border-b group-hover:border-blue-100"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="#">Products</a>
                            <div className="group-hover:border-b group-hover:border-blue-100"></div>
                        </div>

                        <div className="h-10 group">
                            <a href="#">Support</a>
                            <div className="group-hover:border-b group-hover:border-blue-100"></div>
                        </div>
                    </div>
                </div>

                {/* social and copy right container */}
                <div className="flex-flex-col items-start justify-between space-y-4 text-gray-500">
                    {/* icons container */}
                    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        {/* Icon 1 */}
                        <div className="h-8 group">
                            <a href="#">
                                <Image
                                src={'images/icon-facebook.svg'}
                                alt='none'
                                width={20}
                                height={20}
                                priority/>
                            </a>
                        </div>

                        <div className="h-8 group">
                            <a href="#">
                                <Image
                                src={'images/icon-twitter.svg'}
                                alt='none'
                                width={20}
                                height={20}
                                priority/>
                            </a>
                        </div>

                        <div className="h-8 group">
                            <a href="#">
                                <Image
                                src={'images/icon-pinterest.svg'}
                                alt='none'
                                width={20}
                                height={20}
                                priority/>
                            </a>
                        </div>

                        <div className="h-8 group">
                            <a href="#">
                                <Image
                                src={'images/icon-instagram.svg'}
                                alt='none'
                                width={20}
                                height={20}
                                priority/>
                            </a>
                        </div>
                    </div>

                    {/* Copy right */}
                    <div className="font-bold">
                        &copy; 2023 Loopstudios. All right reserved
                    </div>
                </div>
            </div>
           </div>
       </footer>
    )
}

export default Footer