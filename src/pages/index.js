import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Slider from '../components/Slider'
import About from '../components/About'
import Projects from '../components/Projects'
import Image1 from '../images/image1.jpg'
import Image2 from '../images/image2.jpg'
import Image4 from '../images/image.jpg'
import { homeObjOne } from '../components/About/Data'
import { ProjObjOne } from '../components/Projects/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const images = [
        Image1, Image2, Image4
    ]

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Slider slides={images} autoPlay={5} />
            <About {...homeObjOne} />
            <Projects {...ProjObjOne} />
        </div>
    )
}

export default Home
