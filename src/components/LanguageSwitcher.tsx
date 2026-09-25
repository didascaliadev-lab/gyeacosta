import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (language: "es" | "en") => {
    i18n.changeLanguage(language)
  }

  const buttonClass = (language: "es" | "en") => {
    const isActive = i18n.language.startsWith(language)

    return `
      rounded-full
      px-2.5 py-1
      text-[11px] font-medium
      transition-all duration-300
      ${
        isActive
          ? "bg-white text-black"
          : "text-neutral-500 hover:text-white"
      }
    `
  }

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-black/20 p-0.5">
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        className={buttonClass("es")}
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={buttonClass("en")}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher