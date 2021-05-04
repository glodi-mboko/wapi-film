import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import Madmax from '../img/jpg/MAD_MAX.jpg'
import Thesoldier from '../img/jpg/The-soldier.jpg'
import Xmen from '../img/jpg/X-men.jpg'

const ContainerImage = () => {
    const fadeImages = [
        Madmax,
        Thesoldier,
        Xmen
      ];
      
      const fadeProperties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators:false,
        pauseOnHover :false
      }
    return (
        <div className='slider-image-home'> 
            <Fade {...fadeProperties}>
                <div className='each-fade'>
                    <div>
                        <img src={fadeImages[0]} alt='madmax'/>
                    </div>
                    <h1><span>M</span>AD <span>M</span>AX</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores, vel ! Fuga dolorum itaque, ipsam eum aliquid, architecto nostrum dicta similique, tenetur vel labore soluta exercitationem laborum doloremque maxime ! Et, nemo.</p>
                </div>
                <div className='each-fade'>
                    <div>
                        <img src={fadeImages[1]} alt='thesoldier'/>
                    </div>
                </div>
                <div className='each-fade'>
                    <div>
                        <img src={fadeImages[2]} alt='xmen'/>
                    </div>
                </div>
            </Fade>
        </div>
        
      )

}

export default ContainerImage;
