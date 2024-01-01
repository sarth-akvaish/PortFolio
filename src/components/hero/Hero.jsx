import './hero.scss';
import { motion } from 'framer-motion'

const textvariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const slidervariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
}
const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>Sarthak Vaish</motion.h2>
                    <motion.h1 variants={textvariants}>Web Developer and UI/UX Designer</motion.h1>
                    <motion.div className="buttons" variants={textvariants}>
                        <button variants={textvariants}>See the latest works</button>
                        <button variants={textvariants}>Contact Me</button>
                    </motion.div>
                    <motion.img variants={textvariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={slidervariants} initial="initial" animate="animate">
                Programmer Developer Engineer
            </motion.div>
            <div className="imgContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
