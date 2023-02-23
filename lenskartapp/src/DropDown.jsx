import React from 'react'
import  '../src/DropDown.css'
import eyeglasses from '../src/Image/eyeglasses.png'
import computerGlasses from '../src/Image/computerGlasses.png'
import kidsGlasses from '../src/Image/kidsGlasses.png'
import contactLenses from '../src/Image/contactLenses.png'
import sunGlasses from '../src/Image/sunGlasses.png'
import homeEyeTest from '../src/Image/homeEyeTest.png'
import storeLocation from '../src/Image/storeLocation.png'
const DropDown = () => {
  return (
    <div id='container'>
      <div id='dropDown_nav'>
          <p className='grand'>EYEGLASSES
            <div className='parent'>
                <div className='hover'>
                    <img src={eyeglasses} alt="" />
                </div>
            </div>
          </p>
          <p className='grand'>COMPUTER GLASSES 
            <div className='parent'>
                <div className='hover'>
                   <img src={computerGlasses} alt=""/>
                </div>
                <div></div>
            </div>
          </p>
          <p className='grand'>KIDS GLASSES
          <div className='parent'>
                <div className='hover'>
                   <img src={kidsGlasses} alt=""/>
                </div>
                <div></div>
            </div>
          </p>
          <p className='grand'>CONTACT LENSES
          <div className='parent'>
                <div className='hover'>
                   <img src={contactLenses} alt=""/>
                </div>
                <div></div>
            </div>
          </p>
          <p className='grand'>SUNGLASSES
          <div className='parent'>
                <div className='hover'>
                   <img src={sunGlasses} alt=""/>
                </div>
                <div></div>
            </div>
          </p>
          <p className='grand'>HOME EYE-TEST
          <div className='parent'>
                <div className='hover'>
                   <img src={homeEyeTest} alt=""/>
                </div>
                <div></div>
            </div>
          </p>
          <p className='grand'>STORE LOCATOR
          <div className='parent'>
                <div className='hover'>
                   <img src={storeLocation} alt=""/>
                </div>
                <div></div>
            </div>
          </p>
          <img className='img-right' src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="" />
          <img className='img-right' src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" />
          <img className='img-right' src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg" alt="" />
      </div>
    </div>
  )
}

export default DropDown