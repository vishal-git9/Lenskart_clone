import React from "react"
import './MidOne.css'
import SubMidOne from "./SubMidOne";

const MidOne = () => {
   return <div className='parent'>
        
        <div>
          <div className='card'>
            <div>
              <img src='https://static1.lenskart.com/media/desktop/img/Apr22/a2.png' alt='chasma'  className='image' />
              <p>Eyeglasses</p>
            </div>
          </div>
          <div className='hoverCard'>
            <SubMidOne text1='Air Light-Weight' text2='Starting' text3='Powered Lenses' text4=' &#8377;1199' />
            <SubMidOne text1='Premium Lenses' text2='Starting' text3='Jocabs, Fossil' text4=' &#8377;3299' />
            <SubMidOne text1='Kids Glasses' text2='Starting' text3='Powered Lenses' text4=' &#8377;999' />
          </div>
        </div>
        
        <div>
          <div className='card'>
            <div>
              <img src='https://static1.lenskart.com/media/desktop/img/Apr22/b2.png' alt='chasma'  className='image' />
              <p>Sunglasses</p>
            </div>
          </div>
          <div className='hoverCard'>
            <SubMidOne text1='Vincent Chase' text2='Starting' text3='Gold Membership' text4=' &#8377;1199' />
            <SubMidOne text1='Premium Range' text2='Starting' text3='John, Ray-Ban' text4=' &#8377;4499' />
            <SubMidOne text1='Power Sunglasses' text2='Starting' text3='UV 400' text4=' &#8377;2799' />
          </div>
        </div>
        
        <div>
          <div className='card'>
            <div>
              <img src='https://static1.lenskart.com/media/desktop/img/Apr22/d2.png' alt='chasma'  className='image' />
              <p>Computer Glasses</p>
            </div>
          </div>
          <div className='hoverCard'>
            <SubMidOne text1='Computer Glasses' text2='Starting' text3='Blu Zero Power' text4=' &#8377;1499' />
            <SubMidOne text1='Premium Range' text2='Starting' text3='Blu Zero Power' text4=' &#8377;3299' />
            <SubMidOne text1='Air Light-Weight' text2='Starting' text3='Powered Lenses' text4=' &#8377;1199' />
          </div>
        </div>
        
        <div>
          <div className='card'>
            <div>
              <img src='https://static1.lenskart.com/media/desktop/img/Apr22/d.png' alt='chasma'  className='image' />
              <p>Contact Lenses</p>
            </div>
          </div>
          <div className='hoverCard'>
            <SubMidOne text1='Clear With Power' text2='Starting' text3='Powered Lenses' text4=' &#8377;199' />
            <SubMidOne text1='Color With Power' text2='Starting' text3='Powered Lenses' text4=' &#8377;99' />
            <SubMidOne text1='Without Power' text2='Starting' text3='Powered Lenses' text4=' &#8377;299' />
            <SubMidOne text1='Lens Solution' text2='Starting' text3='Powered Lenses' text4=' &#8377;499' />
          </div>
        </div>
        
        <div>
          <div className='card'>
            <div>
              <img src='https://static1.lenskart.com/media/desktop/img/Apr22/e2.png' alt='chasma'  className='image' />
              <p>Power Glasses</p>
            </div>
          </div>
          <div className='hoverCard'>
            <SubMidOne text1='Power Sunglasses' text2='Starting' text3='Buy 1 Get 1 + 200 Off' text4=' &#8377;2599' />
          </div>
        </div>
        
        <div>
          <div className='card'>
            <div>
              <img src='https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg' alt='chasma'  className='image' />
              <p>Progressive Lenses</p>
            </div>
          </div>
          <div className='hoverCard'>
            <SubMidOne text1='Progressive' text2='Starting' text3='Not Expensive' text4=' &#8377;4299' />
          </div>
        </div>
    </div>
};

export default MidOne;