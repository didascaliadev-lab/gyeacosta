import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"

import LanguageSwitcher from "./LanguageSwitcher"

function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-base transition-colors duration-300 ${
      isActive
        ? "text-white"
        : "text-neutral-400 hover:text-white"
    }`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 text-base transition-all duration-300 ${
      isActive
        ? "bg-white/10 text-white"
        : "text-neutral-400 hover:bg-white/5 hover:text-white"
    }`

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div
        className="
          mx-auto max-w-7xl
          rounded-2xl
          border border-white/10
          bg-black/35
          shadow-lg shadow-black/10
          backdrop-blur-xl
        "
      >
        {/* NAVBAR PRINCIPAL */}
        <div className="flex items-center justify-between px-4 py-2 sm:px-5 md:px-6">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 transition-opacity duration-300 hover:opacity-75"
            aria-label="Gye Acosta - Inicio"
          >
            <img
              src="/images/logos/gyenegativo1.png"
              alt="Gye Acosta"
              className="h-12 w-auto sm:h-14 lg:h-16"
            />
          </Link>

          {/* DESKTOP */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            <NavLink to="/" className={linkClass}>
              {t("nav.home")}
            </NavLink>

            <NavLink to="/musician" className={linkClass}>
              {t("nav.musician")}
            </NavLink>

            <NavLink to="/musicoterapia" className={linkClass}>
              {t("nav.musicoterapia")}
            </NavLink>

            <NavLink to="/lutherie" className={linkClass}>
              {t("nav.lutherie")}
            </NavLink>

            <NavLink to="/contacto" className={linkClass}>
              {t("nav.contact")}
            </NavLink>
          </nav>

          {/* DESKTOP LANGUAGE */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* TABLET + MOBILE */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-white/10
                bg-black/20
                text-neutral-300
                transition-all duration-300
                hover:border-white/30
                hover:bg-white/10
                hover:text-white
              "
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={18} strokeWidth={1.5} />
              ) : (
                <Menu size={18} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* MENÚ TABLET + MOBILE */}
        <div
          className={`
            grid overflow-hidden transition-all duration-300 lg:hidden
            ${
              menuOpen
                ? "grid-rows-[1fr] border-t border-white/10 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1 p-3">
              <NavLink
                to="/"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                {t("nav.home")}
              </NavLink>

              <NavLink
                to="/musician"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                {t("nav.musician")}
              </NavLink>

              <NavLink
                to="/musicoterapia"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                {t("nav.musicoterapia")}
              </NavLink>

              <NavLink
                to="/lutherie"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                {t("nav.lutherie")}
              </NavLink>

              <NavLink
                to="/contacto"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                {t("nav.contact")}
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar