import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss'
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar  */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}>Sarthak</motion.span>
                <div className="social">
                    <a href="https://twitter.com/unknown_sarthak" target='_blank'><img src="/twitter_logo.png" alt="" /></a>
                    <a href="https://www.instagram.com/vaish_sa_rthak/" target='_blank'><img src="/instagram.png" alt="" /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/sarthak-vaish-34a06321b/"><img src="/linkedin_logo.png" alt="" /></a>
                    <a target='_blank' href="https://github.com/sarth-akvaish"><img src="/github_logo.jpg" alt="" style={{ backgroundColor: "white", objectFit: "cover" }} /></a>
                </div>
            </div>

        </div>
    )
}

export default Navbar
