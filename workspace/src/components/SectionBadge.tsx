type SectionBadgeProps = {
  number: string
  label: string
  borderClassName?: string
  dark?: boolean
}

export function SectionBadge({
  number,
  label,
  borderClassName = 'border-gray-200',
  dark = false,
}: SectionBadgeProps) {
  return (
    <div className="mb-6 flex items-center gap-3 sm:mb-8">
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold sm:h-7 sm:w-7 sm:text-[12px] ${
          dark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
        }`}
      >
        {number}
      </span>
      <span
        className={`rounded-full border px-3 py-1 text-[12px] font-medium sm:px-4 sm:py-1.5 sm:text-[13px] ${
          dark ? 'border-white/25 text-white' : `text-gray-900 ${borderClassName}`
        }`}
      >
        {label}
      </span>
    </div>
  )
}
