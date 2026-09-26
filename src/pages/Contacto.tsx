import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  ArrowUpRight,
  Mail,
  Music2,
  HeartHandshake,
  Hammer,
} from "lucide-react"

import Hero from "../components/layout/Hero"
import Container from "../components/layout/Container"
import Section from "../components/layout/Section"

function Contacto() {
  const { t } = useTranslation()
  const [subject, setSubject] = useState("")

  const interests = [
    {
      id: "music",
      icon: Music2,
      label: t("contact.interests.music"),
      active: "border-red-700 bg-red-950/20 text-red-400",
    },
    {
      id: "musicTherapy",
      icon: HeartHandshake,
      label: t("contact.interests.musicTherapy"),
      active: "border-teal-700 bg-teal-950/20 text-teal-400",
    },
    {
      id: "lutherie",
      icon: Hammer,
      label: t("contact.interests.lutherie"),
      active: "border-amber-700 bg-amber-950/20 text-amber-400",
    },
  ]

  return (
    <main className="overflow-hidden bg-black">
      {/* HERO */}
      <Hero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        description={t("contact.hero.description")}
        image="/images/contacto/hero.webp"
        mobileImage="/images/contacto/herocel.webp"
        accent="teal"
        imagePosition="center"
      />

      {/* CONTACTO */}
      <Section className="bg-neutral-950">
        <Container>
          <div
            className="
              grid gap-16
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-24
            "
          >
            {/* INFORMACIÓN */}
            <div>
              <span
                className="
                  text-xs uppercase
                  tracking-[0.3em]
                  text-neutral-600
                "
              >
                {t("contact.info.eyebrow")}
              </span>

              <h2
                className="
                  mt-5
                  max-w-md
                  text-3xl leading-tight
                  text-neutral-100
                  md:text-4xl
                "
              >
                {t("contact.info.title")}
              </h2>

              <p className="mt-6 max-w-md text-neutral-400">
                {t("contact.info.description")}
              </p>

              {/* EMAIL */}
              <a
                href="mailto:gyeacosta@gmail.com"
                className="
                  group
                  mt-10
                  flex max-w-md
                  items-center justify-between
                  border-y border-white/10
                  py-6
                "
              >
                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-white/10
                      text-neutral-500
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    <Mail size={17} />
                  </span>

                  <div>
                    <span
                      className="
                        block text-xs uppercase
                        tracking-[0.2em]
                        text-neutral-600
                      "
                    >
                      Email
                    </span>

                    <span className="mt-1 block text-neutral-300">
                      gyeacosta@gmail.com
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-neutral-700
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                />
              </a>
            </div>

            {/* FORMULARIO */}
            <form className="space-y-8">
              {/* NOMBRE + EMAIL */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      text-xs uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                  >
                    {t("contact.form.name")}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="
                      mt-3 w-full
                      border-0 border-b border-white/15
                      bg-transparent
                      px-0 py-3
                      text-neutral-100
                      outline-none
                      transition-colors duration-300
                      placeholder:text-neutral-700
                      focus:border-white/50
                    "
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      text-xs uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                  >
                    {t("contact.form.email")}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="
                      mt-3 w-full
                      border-0 border-b border-white/15
                      bg-transparent
                      px-0 py-3
                      text-neutral-100
                      outline-none
                      transition-colors duration-300
                      placeholder:text-neutral-700
                      focus:border-white/50
                    "
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              {/* MOTIVO */}
              <div>
                <span
                  className="
                    text-xs uppercase
                    tracking-[0.2em]
                    text-neutral-500
                  "
                >
                  {t("contact.form.interest")}
                </span>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {interests.map((interest) => {
                    const Icon = interest.icon
                    const isActive = subject === interest.id

                    return (
                      <button
                        key={interest.id}
                        type="button"
                        onClick={() => setSubject(interest.id)}
                        className={`
                          flex items-center gap-3
                          rounded-2xl
                          border
                          px-4 py-4
                          text-left text-sm
                          transition-all duration-300
                          ${
                            isActive
                              ? interest.active
                              : `
                                border-white/10
                                text-neutral-500
                                hover:border-white/25
                                hover:text-neutral-200
                              `
                          }
                        `}
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.5}
                        />

                        {interest.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* MENSAJE */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    text-xs uppercase
                    tracking-[0.2em]
                    text-neutral-500
                  "
                >
                  {t("contact.form.message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="
                    mt-3 w-full
                    resize-none
                    border-0 border-b border-white/15
                    bg-transparent
                    px-0 py-3
                    text-neutral-100
                    outline-none
                    transition-colors duration-300
                    placeholder:text-neutral-700
                    focus:border-white/50
                  "
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              {/* SUBMIT */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    items-center gap-3
                    rounded-full
                    border border-white/20
                    bg-white
                    px-6 py-3
                    text-sm font-medium
                    text-black
                    transition-all duration-300
                    hover:bg-neutral-200
                  "
                >
                  {t("contact.form.submit")}

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      {/* CIERRE */}
      <Section className="bg-black">
        <Container>
          <div
            className="
              border-y border-white/10
              py-16 text-center
              md:py-24
            "
          >
            <span
              className="
                text-xs uppercase
                tracking-[0.35em]
                text-neutral-600
              "
            >
              {t("contact.closing.eyebrow")}
            </span>

            <p
              className="
                mx-auto mt-7
                max-w-4xl
                text-3xl leading-tight
                text-neutral-200
                md:text-5xl
                md:leading-tight
              "
            >
              {t("contact.closing.text")}
            </p>
          </div>
        </Container>
      </Section>
    </main>
  )
}

export default Contacto