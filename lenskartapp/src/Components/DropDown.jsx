import React from 'react'
import  '../Styles/DropDown.css'
import eyeglasses from '../Image/eyeglasses.png'
import computerGlasses from '../Image/computerGlasses.png'
import kidsGlasses from '../Image/kidsGlasses.png'
import contactLenses from '../Image/contactLenses.png'
import sunGlasses from '../Image/sunGlasses.png'
import homeEyeTest from '../Image/homeEyeTest.png'
import storeLocation from '../Image/storeLocation.png'
const DropDown = () => {
  return (
    <div id='container'>
      <div id='dropDown_nav'>
          <div className='grand'>EYEGLASSES
            <div className='parent'>
                <div className='hover'>
                    <img src={eyeglasses} alt="" />
                </div>
            </div>
          </div>
          <div className='grand'>COMPUTER GLASSES 
            <div className='parent'>
                <div className='hover'>
                   <img src={computerGlasses} alt=""/>
                </div>
                <div></div>
            </div>
          </div>
          <div className='grand'>KIDS GLASSES
          <div className='parent'>
                <div className='hover'>
                   <img src={kidsGlasses} alt=""/>
                </div>
                <div></div>
            </div>
          </div>
          <div className='grand'>CONTACT LENSES
          <div className='parent'>
                <div className='hover'>
                   <img src={contactLenses} alt=""/>
                </div>
                <div></div>
            </div>
          </div>
          <div className='grand'>SUNGLASSES
          <div className='parent'>
                <div className='hover'>
                   <img src={sunGlasses} alt=""/>
                </div>
                <div></div>
            </div>
          </div>
          <div className='grand'>HOME EYE-TEST
          <div className='parent'>
                <div className='hover'>
                   <img src={homeEyeTest} alt=""/>
                </div>
                <div></div>
            </div>
          </div>
          <div className='grand'>STORE LOCATOR
          <div className='parent'>
                <div className='hover'>
                   <img src={storeLocation} alt=""/>
                </div>
                <div></div>
            </div>
          </div>
          <img className='img-right' src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="" />
          <img className='img-right' src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" />
          <img className='img-right' src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg" alt="" />
      </div>
    </div>
  )
}

export default DropDown