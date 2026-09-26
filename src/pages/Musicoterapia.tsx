import { useTranslation } from "react-i18next"
import {HeartHandshake, Music2, MessagesSquare,} from "lucide-react"
import Container from "../components/layout/Container"
import Hero from "../components/layout/Hero"
import Section from "../components/layout/Section"
import SectionHeading from "../components/layout/SectionHeading"
import Button from "../components/ui/Button"

function Musicoterapia() {
  const { t } = useTranslation()

  const approaches = [
    {
      icon: Music2,
      number: "01",
      title: t("musicTherapy.approach.expression.title"),
      description: t("musicTherapy.approach.expression.description"),
    },
    {
      icon: MessagesSquare,
      number: "02",
      title: t("musicTherapy.approach.communication.title"),
      description: t("musicTherapy.approach.communication.description"),
    },
    {
      icon: HeartHandshake,
      number: "03",
      title: t("musicTherapy.approach.connection.title"),
      description: t("musicTherapy.approach.connection.description"),
    },
  ]

  return (
    <main className="overflow-hidden bg-black">

          <Hero
        eyebrow={t("musicTherapy.hero.eyebrow")}
        title={t("musicTherapy.hero.title")}
        description={t("musicTherapy.hero.description")}
        image="/images/musicoterapia/hero.webp"
        mobileImage="/images/musicoterapia/herocel.webp"
        accent="teal"
        imagePosition="center"
        primaryButton={{
          label: t("musicTherapy.hero.approachButton"),
          to: "#approach",
        }}
        secondaryButton={{
          label: t("musicTherapy.hero.contactButton"),
          to: "/contacto",
        }}
      />

      {/* QUÉ ES */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              grid items-center gap-14
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-24
            "
          >
            <div>
              <SectionHeading
                eyebrow={t("musicTherapy.about.eyebrow")}
                title={t("musicTherapy.about.title")}
              />
            </div>

            <div className="space-y-5 text-base leading-8 text-neutral-400">
              <p>{t("musicTherapy.about.paragraph1")}</p>

              <p>{t("musicTherapy.about.paragraph2")}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ENFOQUE */}
      <Section id="approach" className="bg-neutral-950">
        <Container>
          <SectionHeading
            eyebrow={t("musicTherapy.approach.eyebrow")}
            title={t("musicTherapy.approach.title")}
            description={t("musicTherapy.approach.description")}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {approaches.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="
                    group
                    flex min-h-[350px] flex-col
                    rounded-[2rem]
                    border-2 border-neutral-900
                    bg-black
                    p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-teal-600
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-[0.25em] text-teal-500">
                      {item.number}
                    </span>

                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className="
                        text-neutral-600
                        transition-colors duration-300
                        group-hover:text-teal-500
                      "
                    />
                  </div>

                  <div className="mt-auto pt-16">
                    <h3 className="text-2xl text-neutral-100 md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* LA EXPERIENCIA */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              grid items-center gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[2rem]
                bg-neutral-900
              "
            >
              <img
                src="/images/musicoterapia/sesion.webp"
                alt=""
                className="
                  h-full w-full
                  object-cover
                  grayscale
                  transition-all duration-700
                  hover:scale-[1.02]
                  hover:grayscale-0
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />
            </div>

            <div>
              <SectionHeading
                eyebrow={t("musicTherapy.experience.eyebrow")}
                title={t("musicTherapy.experience.title")}
              />

              <div className="mt-7 space-y-5 text-base leading-8 text-neutral-400">
                <p>{t("musicTherapy.experience.paragraph1")}</p>

                <p>{t("musicTherapy.experience.paragraph2")}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PARA QUIÉN */}
      <Section className="bg-neutral-950">
        <Container>
          <div
            className="
              grid gap-14
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-24
            "
          >
            <SectionHeading
              eyebrow={t("musicTherapy.forWho.eyebrow")}
              title={t("musicTherapy.forWho.title")}
              description={t("musicTherapy.forWho.description")}
            />

            <div className="border-t border-white/10">
              {["individual", "groups", "workshops"].map((item, index) => (
                <div
                  key={item}
                  className="
                    group
                    grid gap-4
                    border-b border-white/10
                    py-7
                    sm:grid-cols-[70px_1fr_auto]
                    sm:items-center
                  "
                >
                  <span className="text-xs tracking-[0.2em] text-teal-600">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl text-neutral-200">
                      {t(`musicTherapy.forWho.${item}.title`)}
                    </h3>

                    <p className="mt-2 max-w-lg leading-7 text-neutral-500">
                      {t(`musicTherapy.forWho.${item}.description`)}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

    
      {/* FRASE */}
      <Section className="border-y border-white/5 bg-neutral-950">
        <Container>
          <div className="mx-auto max-w-5xl py-8 text-center">
            <span className="text-xs uppercase tracking-[0.35em] text-teal-500">
              {t("musicTherapy.quote.eyebrow")}
            </span>

            <blockquote
              className="
                mt-8
                text-3xl leading-tight
                text-neutral-200
                md:text-5xl
                md:leading-tight
              "
            >
              “{t("musicTherapy.quote.text")}”
            </blockquote>

            <p className="mx-auto mt-8 max-w-2xl leading-7 text-neutral-500">
              {t("musicTherapy.quote.description")}
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-cover bg-center
            "
            style={{
              backgroundImage:
                "url('/images/musicoterapia/contacto.webp')",
            }}
          >
            <div className="absolute inset-0 bg-black/55" />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-black/95
                via-black/70
                to-black/20
              "
            />

            <div
              className="
                relative z-10
                flex min-h-[500px]
                max-w-3xl flex-col
                justify-center
                px-8 py-16
                md:px-14
                lg:px-16
              "
            >
              <span className="text-xs uppercase tracking-[0.35em] text-teal-500">
                {t("musicTherapy.cta.eyebrow")}
              </span>

              <h2
                className="
                  mt-6
                  text-4xl leading-tight
                  text-neutral-100
                  md:text-5xl
                  lg:text-6xl
                "
              >
                {t("musicTherapy.cta.title")}
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-neutral-400">
                {t("musicTherapy.cta.description")}
              </p>

              <div className="mt-8">
                <Button to="/contact">
                  {t("musicTherapy.cta.button")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

export default Musicoterapia