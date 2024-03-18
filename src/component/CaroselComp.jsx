import Carousel from "react-bootstrap/Carousel";

import { Image } from "react-bootstrap";

const CaroselComp = () => {
   return (
      <Carousel>
         <Carousel.Item>
            <Image src="https://placedog.net/1920" rounded />
            <Carousel.Caption>
               <h3>First slide label</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <Image src="https://placedog.net/1920" rounded />
            <Carousel.Caption>
               <h3>Second slide label</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <Image src="https://placedog.net/1920" rounded />
            <Carousel.Caption>
               <h3>Third slide label</h3>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default CaroselComp;
