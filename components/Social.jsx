import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const socials = [
    // { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/aaronvu0409/" },
    // { icon: <FaTwitter />, path: "" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/letme_eat491/" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social