import React from 'react'
import { Multislider } from '../Components/Multislider'
import { Slider } from '../Components/Slider'
import styles from "../Styles/Home.module.css"
import { cardData } from '../StaticData/eyecard'
import { vincentData, vincentData2 } from '../StaticData/Vincentchase'
import { aqualens, aqualens2 } from '../StaticData/aqualens'
export const Homepage = () => {
  return (
    <div className={styles.container}>
        <Slider/>
        <div className={styles.membership_image}>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/PREMIUM%20BRANDS%20WEB.jpg" alt="membership" width={"100%"} />
        </div>
        <div className={styles.membership_image}>
            <img src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg" alt="membership" width={"100%"} />
        </div>
        <div className={styles.eyeCard}>
            <div>
                <h2>Wear the trend</h2>
                <p>our latest collection</p>
            </div>
            
        <Multislider data={cardData} button={true}/>
        </div>
        {/* for as seen in */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>As Seen on Shark Tank</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif" alt="shark tank" width={"100%"}/>
        </div>
        {/* 2nd */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>As Seen on Karan johar</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif" alt="shark tank" width={"100%"}/>
        </div>
        {/* 3rd */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>Trending Sunglasses</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif" alt="shark tank" width={"100%"}/>
        </div>
        {/* 4rth */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>OJOS</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/ojos%20banner/ojos%20banner/web%20banner/ojos-web-1199.gif" alt="shark tank" width={"100%"}/>
        </div>
        {/* 5th */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>Aquacolor - Glam up with Color lenses</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif" alt="shark tank" width={"100%"}/>
        </div>
        {/* making the grid */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>Aquacolor - Glam up with Color lenses</h2>
            <div></div>
            </div>
            <div>
                <div>
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg" alt="shark tank" />
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" alt="shark tank"/>
            </div>
                <div>
                <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" alt="shark tank" />
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="shark tank"/>
            <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="shark tank"/>
            </div>
            </div>
        </div>

        {/* as seen again 6th */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>INTRODUCING OJOS Wear - SUBSCRIBE & SAVE</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg" alt="shark tank" width={"100%"}/>
        </div>
        {/* as seen again 7th */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>CONTACT LENSES & MORE</h2>
            <div></div>
            </div>
            <div>
            <img src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg" alt="shark tank" width={"600px"}/>
            <img src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg" alt="shark tank" width={"600px"}/>
            </div>
        </div>
        {/* as seen again 8th */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>BUY IT YOUR WAY</h2>
            <div></div>
            </div>
            <div>
                <div>
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/call1800.jpg" alt="shark tank" />
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg" alt="shark tank"/>
            </div>
                <div>
                <img src="https://static1.lenskart.com/media/desktop/img/Nov21/whatsapp.jpg" alt="shark tank" />
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg" alt="shark tank"/>
            </div>
            </div>
        </div>
        {/* as seen again 9th */}
        <div className={styles.asSeen}>
            <div>
            <div></div>
            <h2>OUR BRANDS</h2>
            <div></div>
            </div>
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg" alt="shark tank" width={"100%"}/>
        </div>
        {/* multislider vincent chase */}
        <div className={styles.brands}>
            <h2>EYEGLASSES</h2>
            <Multislider data={vincentData} slides={3}/>
        </div>
        <div className={styles.brands}>
            <h2>SUNGLASSES</h2>
            <Multislider data={vincentData2} slides={3}/>
        </div>
        {/* multislider aqua lens */}
        <div className={styles.asSeen}>
            <img src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg" alt="shark tank" width={"100%"}/>
        </div>
        <div className={styles.brands}>
            <h2>CONTACT LENSES</h2>
            <Multislider data={aqualens} slides={3} button={false}/>
        </div>
        <div className={styles.brands}>
            <h2>COLOR CONTACT LENSES</h2>
            <Multislider data={aqualens2} slides={3} button={false}/>
        </div>
        {/*  */}
        <div className={styles.asSeen}>
            <img src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png" alt="shark tank" width={"100%"}/>
        </div>
    </div>
  )
}
