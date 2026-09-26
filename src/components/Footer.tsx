import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* LOGO + DESCRIPCIÓN */}
          <div className="mx-auto flex max-w-md flex-col items-center md:mx-0 md:items-start">
            <Link
              to="/"
              className="inline-block transition-opacity duration-300 hover:opacity-70"
              aria-label="Gye Acosta - Inicio"
            >
              <img
                src="/images/logos/gyenegativo1.png"
                alt="Gye Acosta"
                className="h-24 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-sm text-neutral-400">
              {t("footer.description")}
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              {t("footer.navigation")}
            </p>

            <nav className="flex flex-col items-center gap-3 md:items-start">
              <Link
                to="/musician"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {t("nav.musician")}
              </Link>

              <Link
                to="/musicoterapia"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {t("nav.musicoterapia")}
              </Link>

              <Link
                to="/lutherie"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {t("nav.lutherie")}
              </Link>

              <Link
                to="/contacto"
                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              {t("footer.contact")}
            </p>

            <p className="max-w-xs text-neutral-400">
              {t("footer.contactText")}
            </p>

            <Link
              to="/contacto"
              className="
                group mt-5 inline-flex items-center gap-2
                text-sm text-neutral-200
                transition-colors duration-300
                hover:text-white
              "
            >
              {t("footer.contactLink")}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="mt-14 border-t border-white/5 pt-6">
          <div
            className="
              flex flex-col items-center gap-3
              text-center text-xs text-neutral-600
              md:flex-row md:justify-between md:text-left
            "
          >
            <p className="text-sm">
              © {currentYear} Gye Acosta
            </p>

            <p className="text-sm">
              {t("footer.disciplines")}
            </p>

            <p className="text-sm">
              {t("footer.createdBy")}{" "}
              <a
                href="https://didascaliadev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-neutral-400
                  transition-colors duration-300
                  hover:text-white
                "
              >
                DidascaliaDev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer