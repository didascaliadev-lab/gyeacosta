type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left"

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm uppercase tracking-[0.3em] text-[#7fa99b]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-4xl leading-tight text-[#e8dfc9] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-[#aaa89f]">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading