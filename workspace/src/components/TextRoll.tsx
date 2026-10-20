type TextRollProps = {
  children: string
  className?: string
}

export function TextRoll({ children, className = '' }: TextRollProps) {
  return (
    <span className={`relative block h-[20px] overflow-hidden ${className}`}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span className="block h-[20px] whitespace-nowrap leading-[20px]">{children}</span>
        <span className="block h-[20px] whitespace-nowrap leading-[20px]">{children}</span>
      </span>
    </span>
  )
}
