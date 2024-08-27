import HeroContent from './HeroContent';
import HeroCanvas from './HeroCanvas';
import '../../App.css'

const Hero = () => {
    return (
        <div className="container-root" id='home'>
            <HeroCanvas />
            <HeroContent />
        </div>
    )

}
export default Hero;