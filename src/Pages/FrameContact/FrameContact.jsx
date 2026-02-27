import './FrameContact.css'


const FrameContact = ({nameIcon, title, desc}) => {
  return (
    <div className='ContactFrame' >
        <div className='iconContact'>{nameIcon}</div>
        <div className='information'>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default FrameContact