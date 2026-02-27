import './Button.css'

const Button = ({name,style,onClick}) => {
  return (
    <div style={style}>
        <button className='btn' onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button