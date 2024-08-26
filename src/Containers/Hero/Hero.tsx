import About from '../../Components/About';
import './Hero.css'
import HeroCanvas from './HeroCanvas';
const Hero = () => {
    return (
        <div className="hero">
            <HeroCanvas />
            <About />
        </div>
    )

}
export default Hero;