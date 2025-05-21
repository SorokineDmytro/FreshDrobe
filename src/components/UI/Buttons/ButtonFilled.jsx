import React from 'react'

// Optional: define allowed widths and heights
const sizeClasses = {
  height: {
    '10': 'h-10',
    '12': 'h-12',
  },
  width: {
    '12': 'w-12',
    '40': 'w-40',
    '50': 'w-50',
    '70': 'w-70',
    '80': 'w-80',
    '100': 'w-100',
    'full': 'w-full',
  },
}

const colorClasses = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  danger: 'bg-danger'
}

const ButtonFilled = React.forwardRef((props, ref) => {
  const {
    text, 
    color = 'primary', 
    height = '12', 
    width = '50', 
    image:Icon = '', 
    onClick,
  } = props;
  const heightClass = sizeClasses.height[height] || 'h-12'
  const widthClass = sizeClasses.width[width] || 'w-50'
  const bgColorClass = colorClasses[color] || 'bg-primary'

  return (
    <button 
      ref={ref} 
      onClick={onClick} 
      className={`font-['Inter',sans-serif] font-bold text-[15px] rounded-4xl border-1 flex items-center justify-center ${bgColorClass} text-white ${heightClass} ${widthClass} duration-300 ease-in-out hover:opacity-75`}
    >
      {/* Only render icon if image is not empty */}
      {Icon && <Icon className="px-1.5 text-3xl" />}

      {/* Only render text if text is not empty */}
      {text && <span className="px-1.5">{text}</span>}
    </button>
  )
})


export default ButtonFilled
