interface UserAvatarProps {
  value: string;
}

export const UserAvatar = ({value}: UserAvatarProps) => {
  return (
    <div className={`flex justify-center items-center rounded-full ${randomBgColor()} w-16 h-16 `}>
      <span>{value ? value[0].toUpperCase() : 'Z'}</span>
    </div>
  )
}


export const randomBgColor = () => {
  const colors = ['bg-slate-300', 'bg-gray-200', 'bg-blue-200', 'bg-zinc-200', 'bg-yellow-100', 'bg-pink-200', 'bg-red-300']
  return colors[~~(Math.random() * colors.length)]
}
