type ContainerProps = {
  children: React.ReactNode
  className?: string
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container