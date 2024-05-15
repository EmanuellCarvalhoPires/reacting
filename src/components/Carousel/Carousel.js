import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image1 from '../../img/Carouselimages/image1'
import Image2 from '../../img/Carouselimages/Image2'
import { Image } from 'react-bootstrap'
function Caroussel() {
  return (
    <Carousel style={{display:"flex", width:"1000px", height:"600px"}}>
    <Carousel.Item>
      <Image1 text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ objectFit:"contain"}}>
      <Image2 text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image1 text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


  )
}

export default Caroussel