import { div, s } from "framer-motion/client"
import { BiLogoDribbble, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi"

const socials=[
    {
        icon:<BiLogoFacebook />,
        path:"",
    },
    {
        icon:<BiLogoInstagram />,
        path:"",
    },
    {
        icon:<BiLogoDribbble />,
        path:"",
    },
    {
        icon:<BiLogoLinkedin />,
        path:"",
    }
]
const Socials = ({styles ,iconS} : any) => {
  return (
    <div className={styles}>
        {socials.map((item ,i)=>(
            <div key={i} className={iconS}>
                {item.icon}
            </div>
        ))
        }
    </div>
  )
}

export default Socials