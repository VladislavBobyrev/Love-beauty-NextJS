import React, {useState, useEffect} from "react"
import Image from "next/dist/client/image"


const slide1 = require("../../public/lable/Estel_22.04.2021_1800х420.jpg")
const slide2 = require("../../public/lable/Hempz_22.04.2021_1800х420.jpg")
const slide3 = require("../../public/lable/Kerastase_12.04.2021_1800х420.jpg")
const slide4 = require("../../public/lable/Loreal-Professionnel_12.04.2021_1800х420.jpg")


const img = [ 
		<Image src={slide2} alt="Picture of the author" />,
		<Image src={slide2} alt="Picture of the author" />,
		<Image src={slide3} alt="Picture of the author" />,
		<Image src={slide4} alt="Picture of the author" />,
]

export const Banner = ():JSX.Element => {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => {
				const res = current === img.length - 1 ? 0 : current + 1
			return res
})
		},5000)
		return () => clearInterval(interval)
	}, [])

	const prevImgIndex = activeIndex ? activeIndex -1 : img.length -1

	const nextImgIndex = activeIndex === img.length -1 ? 0 : activeIndex + 1 

	return (
		<> 
			 <div  className="slider">
			 <a href="">
		       <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
          {img[prevImgIndex]}
        </div>
       
			 <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
								
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
				</a>
    </div>
	
   
		</>
)
}

