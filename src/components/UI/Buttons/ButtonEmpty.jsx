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
    '50': 'w-50',
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

const borderColorClasses = {
  primary: 'border-sky-200',
  danger: 'border-danger',
  dark: 'border-dark',
  transparent: 'border-transparent',
}

const ButtonEmpty = React.forwardRef((props, ref) => {
  const {
    text = '',
    bgColor = 'primary',
    borderColor = 'primary',
    height = '12',
    width = '45',
    image: Icon = '',
    onClick,
  } = props;

  const heightClass = sizeClasses.height[height] || 'h-12'
  const widthClass = sizeClasses.width[width] || 'w-40'
  const textColorClass = colorClasses[bgColor] || 'text-primary'
  const borderColorClass = borderColorClasses[borderColor] || 'border-primary'
  const hoverBgClass = bgColorClasses[bgColor]?.replace('bg-', 'hover:bg-') || 'hover:bg-primary'

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`${heightClass} ${widthClass} font-['Inter',sans-serif] font-bold text-[15px] rounded-4xl border-1 flex items-center justify-center bg-white ${textColorClass} ${borderColorClass} duration-300 ease-in-out ${hoverBgClass} hover:text-white`}
    >
      {Icon && <Icon className="px-1.5 text-3xl" />}
      {text && <span className="px-1.5">{text}</span>}
    </button>
  )
})


export default ButtonEmpty
