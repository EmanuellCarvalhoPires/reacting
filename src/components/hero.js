import { CarouselCaption, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id:1,
        Image: require(''),
        title: 'Batismo',
        description: ""
    },
    {
        id:2,
        Image: require(''),
        title: 'Roblox',
        description: ""
    }
]

export default function AppHero(){
    return(
        <section id='home' className='Hero-block'>
                <Carousel class="fa fa-align-center" data-bs-theme="dark" style={{
                    
                    width: "60%",
                    margin: "auto",
                    marginTop: "50px"
                    }}>
                    {
                        heroData.map(hero => {
                            return(
                                        <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={hero.Image}
                                        alt={"Slide" + hero.id}
                                        />
                                        <Carousel.Caption>
                                        <h5>{hero.title}</h5>
                                        <p>{hero.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                            )
                        })
                    }
                    


                    </Carousel>
        </section>
    )
}