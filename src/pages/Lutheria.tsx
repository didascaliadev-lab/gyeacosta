import { useTranslation } from "react-i18next"
import {Hammer, Ruler, TreePine, Waves,} from "lucide-react"
import Container from "../components/layout/Container"
import Section from "../components/layout/Section"
import SectionHeading from "../components/layout/SectionHeading"
import Button from "../components/ui/Button"
import Hero from "../components/layout/Hero"

function Lutherie() {
  const { t } = useTranslation()

  const instruments = [
    {
      number: "01",
      title: t("lutherie.instruments.jarana.title"),
      description: t("lutherie.instruments.jarana.description"),
      image: "/images/lauderia/jarana.webp",
    },
    {
      number: "02",
      title: t("lutherie.instruments.requinto.title"),
      description: t("lutherie.instruments.requinto.description"),
      image: "/images/lauderia/requinto.webp",
    },
    {
      number: "03",
      title: t("lutherie.instruments.leona.title"),
      description: t("lutherie.instruments.leona.description"),
      image: "/images/lauderia/leona.webp",
    },
        {
      number: "04",
      title: t("lutherie.instruments.ukulele.title"),
      description: t("lutherie.instruments.ukulele.description"),
      image: "/images/lauderia/ukulele.webp",
    },
        {
      number: "05",
      title: t("lutherie.instruments.mosquito.title"),
      description: t("lutherie.instruments.mosquito.description"),
      image: "/images/lauderia/mosquito.webp",
    },
        {
      number: "06",
      title: t("lutherie.instruments.Reparaciones.title"),
      description: t("lutherie.instruments.Reparaciones.description"),
      image: "/images/lauderia/reparacion.webp",
      
    },
  ]

  const process = [
    {
      number: "01",
      icon: TreePine,
      title: t("lutherie.process.wood.title"),
      description: t("lutherie.process.wood.description"),
    },
    {
      number: "02",
      icon: Ruler,
      title: t("lutherie.process.shape.title"),
      description: t("lutherie.process.shape.description"),
    },
    {
      number: "03",
      icon: Hammer,
      title: t("lutherie.process.adjustment.title"),
      description: t("lutherie.process.adjustment.description"),
    },
    {
      number: "04",
      icon: Waves,
      title: t("lutherie.process.sound.title"),
      description: t("lutherie.process.sound.description"),
    },
  ]

  return (
    <main className="overflow-hidden bg-black">

     <Hero
        eyebrow={t("lutherie.hero.eyebrow")}
        title={t("lutherie.hero.title")}
        description={t("lutherie.hero.description")}
        image="/images/lauderia/hero.webp"
        mobileImage="/images/lauderia/herocel.webp"
        accent="amber"
        imagePosition="center"
        primaryButton={{
          label: t("lutherie.hero.instrumentsButton"),
          to: "#instruments",
        }}
        secondaryButton={{
          label: t("lutherie.hero.contactButton"),
          to: "/contact",
        }}
      />

      {/* EL OFICIO */}
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
                eyebrow={t("lutherie.craft.eyebrow")}
                title={t("lutherie.craft.title")}
              />
            </div>

            <div className="space-y-5 text-base leading-8 text-neutral-400">
              <p>{t("lutherie.craft.paragraph1")}</p>
              <p>{t("lutherie.craft.paragraph2")}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* INSTRUMENTOS */}
      <Section id="instruments" className="bg-neutral-950">
        <Container>
          <SectionHeading
            eyebrow={t("lutherie.instruments.eyebrow")}
            title={t("lutherie.instruments.title")}
            description={t("lutherie.instruments.description")}
          />

          <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6"> {instruments.map((instrument) => (
              <article
                key={instrument.number}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border-2 border-neutral-900
                  bg-black
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-700
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={instrument.image}
                    alt={instrument.title}
                    className="
                      h-full w-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/10
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute left-6 top-6
                      text-sm tracking-[0.25em]
                      text-amber-500
                    "
                  >
                    {instrument.number}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl text-neutral-100">
                        {instrument.title}
                      </h3>

                      <p className="mt-4 leading-7 text-neutral-400">
                        {instrument.description}
                      </p>
                    </div>

                   
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROCESO */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              grid gap-14
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-24
            "
          >
            <div>
              <SectionHeading
                eyebrow={t("lutherie.process.eyebrow")}
                title={t("lutherie.process.title")}
                description={t("lutherie.process.description")}
              />
            </div>

            <div className="grid sm:grid-cols-2">
              {process.map((step) => {
                const Icon = step.icon

                return (
                  <article
                    key={step.number}
                    className="
                      group
                      min-h-[280px]
                      border-t border-white/10
                      py-7
                      sm:px-7
                      sm:odd:border-r
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-[0.25em] text-amber-600">
                        {step.number}
                      </span>

                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="
                          text-neutral-700
                          transition-colors duration-300
                          group-hover:text-amber-500
                        "
                      />
                    </div>

                    <div className="mt-16">
                      <h3 className="text-2xl text-neutral-200">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-neutral-500">
                        {step.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* TALLER */}
      <Section className="bg-neutral-950">
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
                src="/images/lauderia/proceso.webp"
                alt=""
                className="
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  hover:scale-[1.02]
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
                eyebrow={t("lutherie.workshop.eyebrow")}
                title={t("lutherie.workshop.title")}
              />

              <div className="mt-7 space-y-5 text-base leading-8 text-neutral-400">
                <p>{t("lutherie.workshop.paragraph1")}</p>
                <p>{t("lutherie.workshop.paragraph2")}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SON JAROCHO */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              relative
              min-h-[600px]
              overflow-hidden
              rounded-[2rem]
              border border-white/10
            "
          >
            <img
              src="/images/lauderia/ensamble.webp"
              alt=""
              className="
                absolute inset-0
                h-full w-full
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/45" />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-black/95
                via-black/75
                to-black/20
              "
            />

            <div
              className="
                relative z-10
                flex min-h-[600px]
                max-w-3xl flex-col
                justify-center
                px-8 py-16
                md:px-14
                lg:px-16
              "
            >
              <span
                className="
                  text-xs uppercase
                  tracking-[0.35em]
                  text-amber-500
                "
              >
                {t("lutherie.sonJarocho.eyebrow")}
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
                {t("lutherie.sonJarocho.title")}
              </h2>

              <div
                className="
                  mt-7 max-w-xl
                  space-y-5
                  leading-8
                  text-neutral-300
                "
              >
                <p>{t("lutherie.sonJarocho.paragraph1")}</p>
                <p>{t("lutherie.sonJarocho.paragraph2")}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* REPARACIÓN Y CUIDADO */}
      <Section className="bg-neutral-950">
        <Container>
          <div
            className="
              grid gap-10
              border-y border-white/10
              py-14
              md:grid-cols-[1fr_1.2fr]
              md:items-end
              md:py-20
            "
          >
            <div>
              <span
                className="
                  text-xs uppercase
                  tracking-[0.35em]
                  text-amber-600
                "
              >
                {t("lutherie.care.eyebrow")}
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  text-neutral-100
                  md:text-5xl
                "
              >
                {t("lutherie.care.title")}
              </h2>
            </div>

            <div>
              <p className="max-w-xl leading-8 text-neutral-400">
                {t("lutherie.care.description")}
              </p>

              <div className="mt-7">
                <Button to="/contacto" variant="secondary">
                  {t("lutherie.care.button")}
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
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-cover bg-center
            "
            style={{
              backgroundImage:
                "url('/images/lauderia/contacto.webp')",
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
              <span
                className="
                  text-xs uppercase
                  tracking-[0.35em]
                  text-amber-500
                "
              >
                {t("lutherie.cta.eyebrow")}
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
                {t("lutherie.cta.title")}
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-neutral-400">
                {t("lutherie.cta.description")}
              </p>

              <div className="mt-8">
                <Button to="/contacto">
                  {t("lutherie.cta.button")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

export default Lutherie