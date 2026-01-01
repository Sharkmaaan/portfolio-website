import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

export const LanguageSwitcher = ({ className, iconSize = "h-5 w-5" }) => {
  const { i18n } = useTranslation();

  // Update HTML lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'nl' ? 'en' : 'nl';
    i18n.changeLanguage(newLang);
  };

  // Show the flag of the language you're switching TO
  const flagToShow = i18n.language === 'nl' ? '🇬🇧' : '🇳🇱';

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "p-2 rounded-full hover:bg-secondary/80 transition-colors duration-300",
        "flex items-center justify-center text-foreground/80 hover:text-primary",
        className
      )}
      aria-label={`Switch to ${i18n.language === 'nl' ? 'English' : 'Dutch'}`}
      title={`Switch to ${i18n.language === 'nl' ? 'English' : 'Dutch'}`}
    >
      <span className="text-2xl leading-none">{flagToShow}</span>
    </button>
  );
};
