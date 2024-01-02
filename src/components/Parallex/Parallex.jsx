import { useRef } from 'react';
import './Parallex.scss'
import { motion, useScroll, useTransform } from 'framer-motion';


const Parallex = ({ type }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

    return (
        <div ref={ref} className='parallex' style={{ background: type === "Services" ? "linear-gradient(180deg,#111132,#0c01cd)" : "linear-gradient(180deg,#111132,#505064)" }}>
            <motion.h1 style={{ y: yText }}>
                {type === "Services" ? 'What we do?' : "What we did?"}
            </motion.h1>
            <motion.div className="mountains"> </motion.div>
            <motion.div className="planets" style={{ y: ybg, backgroundImage: `url(${type === 'services' ? "/planets.png" : "/sun.png"})` }}> </motion.div>
            <motion.div style={{ x: ybg }} className="stars"> </motion.div>
        </div>
    )
}

export default Parallex
