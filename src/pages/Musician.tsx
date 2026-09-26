import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Pause, Play } from "lucide-react"

import Hero from "../components/layout/Hero"
import Container from "../components/layout/Container"
import Section from "../components/layout/Section"
import SectionHeading from "../components/layout/SectionHeading"
import Button from "../components/ui/Button"

function Musician() {
  const { t } = useTranslation()

  const [isProjectsPlaying, setIsProjectsPlaying] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)

  const projectsAudioRef = useRef<HTMLAudioElement | null>(null)
  const fadeIntervalRef = useRef<number | null>(null)

  const creativeAreas = [
    {
      number: "01",
      title: t("musician.areas.personal.title"),
      description: t("musician.areas.personal.description"),
      accent: "text-red-600",
      border: "hover:border-red-700",
    },
    {
      number: "02",
      title: t("musician.areas.collaborations.title"),
      description: t("musician.areas.collaborations.description"),
      accent: "text-teal-500",
      border: "hover:border-teal-600",
    },
    {
      number: "03",
      title: t("musician.areas.sound.title"),
      description: t("musician.areas.sound.description"),
      accent: "text-amber-600",
      border: "hover:border-amber-700",
    },
  ]

  const projects = [
    {
      id: 1,
      category: t("musician.projects.items.project1.category"),
      title: t("musician.projects.items.project1.title"),
      year: "2019",
      image: "/images/musician/comeson.webp",
    },
    {
      id: 2,
      category: t("musician.projects.items.project2.category"),
      title: t("musician.projects.items.project2.title"),
      year: "2025",
      image: "/images/musician/colaboracion.webp",
    },
    {
      id: 3,
      category: t("musician.projects.items.project3.category"),
      title: t("musician.projects.items.project3.title"),
      year: "2022",
      image: "/images/musician/tlaloques.webp",
    },
  ]

  const clearFadeInterval = useCallback(() => {
    if (fadeIntervalRef.current !== null) {
      window.clearInterval(fadeIntervalRef.current)
      fadeIntervalRef.current = null
    }
  }, [])

  const fadeIn = useCallback(async () => {
    const audio = projectsAudioRef.current

    if (!audio) return

    clearFadeInterval()

    try {
      await audio.play()
      setIsProjectsPlaying(true)

      const targetVolume = 0.25
      const step = 0.02

      fadeIntervalRef.current = window.setInterval(() => {
        const currentAudio = projectsAudioRef.current

        if (!currentAudio) {
          clearFadeInterval()
          return
        }

        const nextVolume = Math.min(
          currentAudio.volume + step,
          targetVolume
        )

        currentAudio.volume = nextVolume

        if (nextVolume >= targetVolume) {
          clearFadeInterval()
        }
      }, 100)
    } catch {
      setIsProjectsPlaying(false)
    }
  }, [clearFadeInterval])

  const fadeOut = useCallback(() => {
    const audio = projectsAudioRef.current

    if (!audio || audio.paused) return

    clearFadeInterval()

    const step = 0.02

    fadeIntervalRef.current = window.setInterval(() => {
      const currentAudio = projectsAudioRef.current

      if (!currentAudio) {
        clearFadeInterval()
        return
      }

      const nextVolume = Math.max(
        currentAudio.volume - step,
        0
      )

      currentAudio.volume = nextVolume

      if (nextVolume <= 0) {
        currentAudio.pause()
        clearFadeInterval()
        setIsProjectsPlaying(false)
      }
    }, 80)
  }, [clearFadeInterval])

  const toggleProjectsAudio = () => {
    const audio = projectsAudioRef.current

    if (!audio) return

    setHasUserInteracted(true)

    if (audio.paused) {
      void fadeIn()
    } else {
      fadeOut()
    }
  }

  useEffect(() => {
    const audio = new Audio(
      "/musica/proyectosgye.mp3"
    )

    audio.volume = 0
    audio.loop = true
    audio.preload = "auto"

    projectsAudioRef.current = audio

    const registerInteraction = () => {
      setHasUserInteracted(true)
    }

    window.addEventListener("pointerdown", registerInteraction, {
      once: true,
    })

    window.addEventListener("keydown", registerInteraction, {
      once: true,
    })

    return () => {
      clearFadeInterval()

      audio.pause()
      audio.src = ""

      projectsAudioRef.current = null

      window.removeEventListener(
        "pointerdown",
        registerInteraction
      )

      window.removeEventListener(
        "keydown",
        registerInteraction
      )
    }
  }, [clearFadeInterval])

  useEffect(() => {
    if (!hasUserInteracted) return

    const section = document.getElementById("projects")

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void fadeIn()
        } else {
          fadeOut()
        }
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [hasUserInteracted, fadeIn, fadeOut])

  return (
    <main className="overflow-hidden bg-black">
      {/* HERO */}
      <Hero
        eyebrow={t("musician.hero.eyebrow")}
        title={t("musician.hero.title")}
        description={t("musician.hero.description")}
        image="/images/musician/gyeacosta1.png"
        mobileImage="/images/musician/herocel.webp"
        accent="red"
        imagePosition="center"
        primaryButton={{
          label: t("musician.hero.projectsButton"),
          to: "#projects",
        }}
        secondaryButton={{
          label: t("musician.hero.contactButton"),
          to: "/contacto",
        }}
      />

      {/* FORMACIÓN */}
      <Section className="bg-black">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <SectionHeading
                eyebrow={t("musician.training.eyebrow")}
                title={t("musician.training.title")}
                description={t("musician.training.description")}
              />
            </div>

            <div className="border-t border-white/10">
              <div className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[160px_1fr]">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  {t("musician.training.academic.label")}
                </span>

                <p className="text-neutral-300">
                  {t("musician.training.academic.value")}
                </p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[160px_1fr]">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  {t("musician.training.instruments.label")}
                </span>

                <p className="text-neutral-300">
                  {t("musician.training.instruments.value")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FORMAS DE CREAR */}
      <Section className="bg-neutral-950">
        <Container>
          <SectionHeading
            eyebrow={t("musician.areas.eyebrow")}
            title={t("musician.areas.title")}
            description={t("musician.areas.description")}
          />

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {creativeAreas.map((area) => (
              <article
                key={area.number}
                className={`
                  group flex min-h-[330px] flex-col
                  rounded-[2rem]
                  border-2 border-neutral-900
                  bg-black
                  p-7
                  transition-all duration-300
                  hover:-translate-y-1
                  ${area.border}
                `}
              >
                <span
                  className={`text-sm tracking-[0.25em] ${area.accent}`}
                >
                  {area.number}
                </span>

                <div className="mt-auto pt-16">
                  <h3 className="text-2xl text-neutral-100 md:text-3xl">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-neutral-400">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROYECTOS */}
      <Section id="projects" className="bg-black">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t("musician.projects.eyebrow")}
              title={t("musician.projects.title")}
              description={t("musician.projects.description")}
            />

            {/* CONTROL GENERAL DE AUDIO */}
            <button
              type="button"
              onClick={toggleProjectsAudio}
              aria-label={
                isProjectsPlaying
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="
                group
                flex w-fit items-center gap-3
                rounded-full
                border border-white/10
                bg-white/5
                px-4 py-2.5
                text-sm text-neutral-400
                backdrop-blur-md
                transition-all duration-300
                hover:border-white/30
                hover:bg-white/10
                hover:text-white
                active:scale-95
              "
            >
              <span
                className={`
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  ${
                    isProjectsPlaying
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  }
                `}
              >
                {isProjectsPlaying ? (
                  <Pause
                    size={14}
                    strokeWidth={1.8}
                    fill="currentColor"
                  />
                ) : (
                  <Play
                    size={14}
                    strokeWidth={1.8}
                    fill="currentColor"
                    className="ml-0.5"
                  />
                )}
              </span>

              <span>
                {isProjectsPlaying
                  ? "Sonando"
                  : "Escuchar proyectos"}
              </span>

              {isProjectsPlaying && (
                <span className="ml-1 flex h-4 items-end gap-[2px]">
                  <span className="h-2 w-[2px] animate-pulse rounded-full bg-current" />
                  <span className="h-4 w-[2px] animate-pulse rounded-full bg-current [animation-delay:150ms]" />
                  <span className="h-3 w-[2px] animate-pulse rounded-full bg-current [animation-delay:300ms]" />
                  <span className="h-2 w-[2px] animate-pulse rounded-full bg-current [animation-delay:450ms]" />
                </span>
              )}
            </button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      grayscale
                      transition-all duration-700
                      group-hover:scale-[1.03]
                      group-hover:grayscale-0
                      group-active:scale-[1.03]
                      group-active:grayscale-0
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      bg-black/10
                      transition-colors duration-500
                      group-hover:bg-black/0
                      group-active:bg-black/0
                    "
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-600">
                    <span>{project.category}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-2 text-xl text-neutral-200">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* COLABORACIONES */}
      <Section className="border-y border-white/5 bg-neutral-950">
        <Container>
          <div className="mx-auto max-w-5xl py-6 text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-teal-500">
              {t("musician.collaborations.eyebrow")}
            </span>

            <blockquote className="mt-8 text-3xl leading-tight text-neutral-200 md:text-5xl md:leading-tight">
              “{t("musician.collaborations.quote")}”
            </blockquote>

            <p className="mx-auto mt-8 max-w-2xl text-neutral-400">
              {t("musician.collaborations.description")}
            </p>
          </div>
        </Container>
      </Section>

      {/* TEATRO / DISEÑO SONORO */}
      <Section className="bg-black">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src="/images/musician/teatro.webp"
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div>
              <SectionHeading
                eyebrow={t("musician.theatre.eyebrow")}
                title={t("musician.theatre.title")}
              />

              <div className="mt-7 space-y-5 text-neutral-400">
                <p>
                  {t("musician.theatre.paragraph1")}
                </p>

                <p>
                  {t("musician.theatre.paragraph2")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MUSICOTERAPIA */}
      <Section className="bg-neutral-950">
        <Container>
          <div className="grid gap-10 border-y border-white/10 py-14 md:grid-cols-[1fr_1.2fr] md:items-end md:py-20">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-teal-500">
                {t("musician.musicTherapy.eyebrow")}
              </span>

              <h2 className="mt-5 text-4xl text-neutral-100 md:text-5xl">
                {t("musician.musicTherapy.title")}
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-neutral-400">
                {t("musician.musicTherapy.description")}
              </p>

              <div className="mt-7">
                <Button
                  to="/musicoterapia"
                  variant="secondary"
                >
                  {t("musician.musicTherapy.button")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              relative min-h-[500px] overflow-hidden
              rounded-[2rem]
              border border-white/20
              bg-cover bg-center
            "
            style={{
              backgroundImage:
                "url('/images/musician/contacto.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/60 to-black/20" />

            <div className="relative z-10 flex min-h-[500px] max-w-3xl flex-col justify-center px-8 py-16 md:px-14 lg:px-16">
              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                {t("musician.cta.eyebrow")}
              </span>

              <h2 className="mt-6 text-4xl leading-tight text-neutral-100 md:text-5xl lg:text-6xl">
                {t("musician.cta.title")}
              </h2>

              <p className="mt-6 max-w-xl text-neutral-400">
                {t("musician.cta.description")}
              </p>

              <div className="mt-8">
                <Button to="/contacto">
                  {t("musician.cta.button")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

export default Musician
