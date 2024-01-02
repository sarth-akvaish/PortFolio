import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';


const items = [
    {
        id: 1,
        title: 'React Commerce',
        img: "https://images.unsplash.com/photo-1703758435024-c91738662ab8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        desc: "jakdnd avdkjava akdvkjanvdka akdvnkjdafj d vajddkjav advnka"
    }, {
        id: 2,
        title: 'MERN App',
        img: "https://unsplash.com/photos/a-large-waterfall-in-the-middle-of-a-forest-fV2cMKs1Aww",
        desc: "jakdnd avdkjava akdvkjanvdka akdvnkjdafj d vajddkjav advnka"
    }, {
        id: 3,
        title: 'React Health App',
        img: "https://unsplash.com/photos/a-large-waterfall-in-the-middle-of-a-forest-fV2cMKs1Aww",
        desc: "jakdnd avdkjava akdvkjanvdka akdvnkjdafj d vajddkjav advnka"
    }, {
        id: 4,
        title: 'React Music App',
        img: "https://unsplash.com/photos/a-large-waterfall-in-the-middle-of-a-forest-fV2cMKs1Aww",
        desc: "jakdnd avdkjava akdvkjanvdka akdvnkjdafj d vajddkjav advnka"
    },
]


const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],

    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='Portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
