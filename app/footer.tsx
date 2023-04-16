import { FaGithub, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa"



type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="border-t border-white/5 mt-10">
            <div className="mx-auto max-w-screen-xl py-5 flex justify-between px-5 md:px-10 lg:px-16">
                <div>
                    <p className="text-sm text-white font-normal">
                        Designed & Built by <strong className="font-semibold text-green-500">Ali Hussnain.</strong>
                    </p>
                </div>
                <div>
                    <div className="flex justify-center gap-8">
                        <a href="https://github.com/alihussnainrb" target="_blank">
                            <FaGithub className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
                        </a>
                        <a href="https://twitter.com/alihussnainrb" target="_blank">
                            <FaTwitter className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/alihussnainrb" target="_blank">
                            <FaLinkedinIn className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
                        </a>
                        <a href="skype:live:.cid.3d0c704665c411bb?chat">
                            <FaSkype className="text-gray-300 cursor-pointer hover:text-green-500 hover:scale-125 transition text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
