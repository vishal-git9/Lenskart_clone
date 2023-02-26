import './MidOne.css';

const SubMidOne = ({text1, text2, text3, text4}) => {
    return (
        
              <div style={{ background:'white'}}>
                <div style={{height: '100%', padding: '5px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p className='boldText'>{text1}</p>
                    <p>{text2}</p>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{text3}</p>
                    <p className='boldText'> {text4} </p>
                  </div>
                </div>
              
              </div>
    );
};

export default SubMidOne;