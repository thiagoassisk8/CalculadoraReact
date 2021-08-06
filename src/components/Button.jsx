import React from 'react'
import './Button.css'


export default props => 
<button className={`
   button ${props.operation ? 'operation':''}
          ${props.double ? 'double':''}
          ${props.triple ? 'triple':''}
   `} onClick={e =>props.click && props.click(e.target.label)}>
    {props.label}</button>

// const props = () => {
    // return (<button  className='button'>{props.label}</button>  );
// }
 
// export default props;