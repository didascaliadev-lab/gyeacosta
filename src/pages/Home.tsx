import { useTranslation } from "react-i18next"

import Hero from "../components/layout/Hero"
import Button from "../components/ui/Button"
import Container from "../components/layout/Container"
import Section from "../components/layout/Section"
import SectionHeading from "../components/layout/SectionHeading"

function Home() {
  const { t } = useTranslation()

  return (
    <>
      {/* HERO */}
      <Hero
        eyebrow={t("home.hero.eyebrow")}
        title={t("home.hero.title")}
        description={t("home.hero.description")}
        image="/images/home/hero.webp"
      >
        <Button to="/musicoterapia">
          {t("home.hero.musicoterapia")}
        </Button>

        <Button to="/lutherie" variant="secondary">
          {t("home.hero.lutherie")}
        </Button>
      </Hero>

      {/* ACTIVIDADES */}
      <Section className="bg-neutral-950">
        <Container>
          <SectionHeading
            eyebrow={t("home.activities.eyebrow")}
            title={t("home.activities.title")}
            description={t("home.activities.description")}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* MÚSICO */}
            <article className="group rounded-[2rem] border-2 border-neutral-800 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-red-700">
              <span className="text-sm uppercase tracking-[0.25em] text-red-700 transition-colors duration-300 group-hover:text-red-500">
                01
              </span>

              <h3 className="mt-6 text-3xl text-white">
                {t("home.activities.musician.title")}
              </h3>

              <p className="mt-4 max-w-lg leading-relaxed text-neutral-400">
                {t("home.activities.musician.description")}
              </p>

              <div className="mt-8">
                <Button to="/musician" variant="secondary">
                  {t("home.activities.musician.button")}
                </Button>
              </div>
            </article>

            {/* MUSICOTERAPIA */}
            <article className="group rounded-[2rem] border-2 border-neutral-800 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-teal-600">
              <span className="text-sm uppercase tracking-[0.25em] text-teal-600 transition-colors duration-300 group-hover:text-teal-400">
                02
              </span>

              <h3 className="mt-6 text-3xl text-white">
                {t("home.activities.musicTherapy.title")}
              </h3>

              <p className="mt-4 max-w-lg leading-relaxed text-neutral-400">
                {t("home.activities.musicTherapy.description")}
              </p>

              <div className="mt-8">
                <Button to="/musicoterapia" variant="secondary">
                  {t("home.activities.musicTherapy.button")}
                </Button>
              </div>
            </article>

            {/* LAUDERÍA */}
            <article className="group rounded-[2rem] border-2 border-neutral-800 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-700">
              <span className="text-sm uppercase tracking-[0.25em] text-amber-700 transition-colors duration-300 group-hover:text-amber-500">
                03
              </span>

              <h3 className="mt-6 text-3xl text-white">
                {t("home.activities.lutherie.title")}
              </h3>

              <p className="mt-4 max-w-lg leading-relaxed text-neutral-400">
                {t("home.activities.lutherie.description")}
              </p>

              <div className="mt-8">
                <Button to="/lutherie" variant="secondary">
                  {t("home.activities.lutherie.button")}
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* SOBRE GYE */}
      <Section className="border-y border-neutral-800 bg-neutral-900">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-800">
              <img
                src="/images/home/gyeacosta.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow={t("home.about.eyebrow")}
                title={t("home.about.title")}
                description={t("home.about.description")}
              />

              <div className="mt-8">
                <Button to="/musician">
                  {t("home.about.button")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONTACTO */}
      <Section className="bg-neutral-950">
        <Container>
          <div
            className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/home/contacto.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

            <div className="relative z-10 flex min-h-[480px] max-w-2xl flex-col justify-center px-8 py-14 md:px-14 lg:px-16">
              <SectionHeading
                eyebrow={t("home.contact.eyebrow")}
                title={t("home.contact.title")}
                description={t("home.contact.description")}
              />

              <div className="mt-8">
                <Button to="/contacto">
                  {t("home.contact.button")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Home