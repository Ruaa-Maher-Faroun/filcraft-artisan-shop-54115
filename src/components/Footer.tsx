import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FilCraft</h3>
            <p className="text-background/80">{t.footer.brandDescription}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/#features" className="hover:text-background transition-colors">{t.footer.productLinks.features}</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">{t.footer.productLinks.pricing}</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">{t.footer.productLinks.templates}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">{t.footer.companyLinks.about}</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">{t.footer.companyLinks.blog}</a></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">{t.footer.companyLinks.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">{t.footer.supportLinks.helpCenter}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t.footer.supportLinks.docs}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t.footer.supportLinks.community}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm mb-4 md:mb-0">{t.footer.copyright}</p>
          <p className="text-background/80 text-sm flex items-center gap-2">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-accent fill-accent" /> {t.footer.forCrafters}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
