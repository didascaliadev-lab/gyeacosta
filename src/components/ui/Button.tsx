import { Link } from "react-router-dom"

type ButtonProps = {
  children: React.ReactNode
  to?: string
  variant?: "primary" | "secondary"
}

function Button({
  children,
  to,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? `
          border border-white/20
          bg-white/5
          text-neutral-200
          hover:border-white/50
          hover:bg-white/10
          hover:text-white
        `
      : `
          border border-neutral-700
          bg-transparent
          text-neutral-300
          hover:border-neutral-400
          hover:bg-white/5
          hover:text-white
        `

  const className = `
    inline-flex items-center justify-center
    rounded-full
    px-6 py-3
    text-sm font-medium
    transition-all duration-300
    ${styles}
  `

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

export default Button