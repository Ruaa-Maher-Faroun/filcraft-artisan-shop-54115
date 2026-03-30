import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import filcraftLogo from "@/assets/filcraft-logo.png";

const Header = () => {
  const { lang, toggle } = useLanguage();
  const ar = lang === "ar";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={filcraftLogo} alt="FilCraft Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-foreground">FilCraft</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-foreground/80 hover:text-foreground transition-colors">
              {ar ? "المميزات" : "Features"}
            </Link>
            <Link to="/#showcase" className="text-foreground/80 hover:text-foreground transition-colors">
              {ar ? "المعرض" : "Showcase"}
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              {ar ? "الأسعار" : "Pricing"}
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              {ar ? "من نحن" : "About"}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggle} title={ar ? "Switch to English" : "التبديل إلى العربية"}>
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              {ar ? "تسجيل الدخول" : "Login"}
            </Button>
            <Button className="bg-primary hover:bg-accent text-primary-foreground">
              {ar ? "ابدأ الآن" : "Get Started"}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
