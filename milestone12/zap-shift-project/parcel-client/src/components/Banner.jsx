import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import image1 from "../assets/banner/banner1.png"
import image2 from "../assets/banner/banner2.png"
import image3 from "../assets/banner/banner3.png"

const AutoplaySlider = withAutoplay(AwesomeSlider);

// Banner ke ekta functional component hisebe likha holo
const Banner = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      className="h-[500px] w-full"
    >
      <div data-src={image1} />
      <div data-src={image2} />
      <div data-src={image3} />
    </AutoplaySlider>
  );
};

export default Banner;