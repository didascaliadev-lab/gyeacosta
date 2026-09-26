import Container from "./Container"
import Button from "../ui/Button"

type HeroProps = {
  eyebrow?: string
  title: string
  description?: string
  image: string
  mobileImage?: string
  accent?: "red" | "teal" | "amber" | "neutral"

  imagePosition?: string

  primaryButton?: {
    label: string
    to: string
  }

  secondaryButton?: {
    label: string
    to: string
  }

  children?: React.ReactNode
}

function Hero({
  eyebrow,
  title,
  description,
  image,
  mobileImage,
  accent = "neutral",
  imagePosition = "center",
  primaryButton,
  secondaryButton,
  children,
}: HeroProps) {
  const accentClass = {
    red: "text-red-500",
    teal: "text-teal-500",
    amber: "text-amber-500",
    neutral: "text-neutral-400",
  }[accent]

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0 overflow-hidden">
        <picture className="absolute inset-0 block h-full w-full">
          {mobileImage && (
            <source
              media="(max-width: 767px)"
              srcSet={mobileImage}
            />
          )}

          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </picture>

        {/* OSCURECIDO GENERAL */}
        <div className="absolute inset-0 bg-black/30" />

        {/* GRADIENTE PARA DAR LEGIBILIDAD AL TEXTO */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black
            via-black/60
            to-black/20
          "
        />

        {/* INTEGRACIÓN CON NAVBAR Y SIGUIENTE SECCIÓN */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black
            via-transparent
            to-black/25
          "
        />
      </div>

      {/* CONTENIDO */}
      <Container
        className="
          relative z-10
          flex min-h-[90vh] items-center
          pt-36 pb-20
          sm:pt-40 sm:pb-24
          lg:pt-44 lg:pb-28
        "
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <span
              className={`
                text-xs uppercase
                tracking-[0.35em]
                md:text-sm
                ${accentClass}
              `}
            >
              {eyebrow}
            </span>
          )}

          <h1
            className="
              mt-6
              text-5xl leading-[1.02]
              text-neutral-100
              sm:text-6xl
              lg:text-7xl
            "
          >
            {title}
          </h1>

          {description && (
            <p
              className="
                mt-7 max-w-xl
                text-base leading-7
                text-neutral-400
                md:text-lg md:leading-8
              "
            >
              {description}
            </p>
          )}

          {/* BOTONES DEFINIDOS MEDIANTE PROPS */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryButton && (
                <Button to={primaryButton.to}>
                  {primaryButton.label}
                </Button>
              )}

              {secondaryButton && (
                <Button
                  to={secondaryButton.to}
                  variant="secondary"
                >
                  {secondaryButton.label}
                </Button>
              )}
            </div>
          )}

          {/* CONTENIDO PERSONALIZADO, USADO POR HOME */}
          {children && (
            <div className="mt-9 flex flex-wrap gap-3">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Hero