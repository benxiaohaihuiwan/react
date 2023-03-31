
import './BackDrop.css'

import ReactDom from 'react-dom'

const BackDrop = (props)=>{

  const backdrop = document.getElementById('backdrop')

  return ReactDom.createPortal((
    <div className="backDrop">
      {props.children}
    </div>
  ),backdrop)
}

export default BackDrop