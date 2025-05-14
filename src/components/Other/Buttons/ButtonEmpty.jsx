import React from 'react'

const sizeClasses = {
  height: {
    '11': 'h-11',
    '12': 'h-12',
  },
  width: {
    '11': 'w-11',
    '30': 'w-30',
    '35': 'w-35',
    '40': 'w-40',
    '45': 'w-45',
    '80': 'w-80',
  },
}

const colorClasses = {
  primary: 'text-primary',
  danger: 'text-danger',
  dark: 'text-dark',
}

const bgColorClasses = {
  primary: 'bg-primary',
  danger: 'bg-danger',
}

const ButtonEmpty = ({
  text = '',
  bgColor = 'primary',
  borderColor = 'primary', // or 'transparent'
  height = '12',
  width = '45',
  image:Icon = '',
}) => {
  const heightClass = sizeClasses.height[height] || 'h-12'
  const widthClass = sizeClasses.width[width] || 'w-50'
  const textColorClass = colorClasses[bgColor] || 'text-primary'
  const borderColorClass = borderColor === 'transparent'
    ? 'border-transparent'
    : `border-${borderColor}`
  const hoverBgClass = bgColorClasses[bgColor]?.replace('bg-', 'hover:bg-') || 'hover:bg-primary'

  return (
    <button
      className={`${heightClass} ${widthClass} font-['Inter',sans-serif] font-bold text-[15px] rounded-4xl border-1 flex items-center justify-center bg-white ${textColorClass} ${borderColorClass} duration-300 ease-in-out ${hoverBgClass} hover:text-white`}
    >
      {/* Only render icon if image is not empty */}
      {Icon && <Icon className="px-1.5 text-3xl" />}

      {/* Only render text if text is not empty */}
      {text && <span className="px-1.5">{text}</span>}
    </button>
  )
}

export default ButtonEmpty
