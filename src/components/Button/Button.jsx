import './Button.css'

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} className={`galleria-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
