import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FilCraft</h3>
            <p className="text-background/80">{ar ? "تمكين الأعمال الصغيرة من خلال التصميم الجميل والتكنولوجيا الحديثة." : "Empowering small businesses through beautiful design and modern technology."}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{ar ? "المنتج" : "Product"}</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/#features" className="hover:text-background transition-colors">{ar ? "المميزات" : "Features"}</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">{ar ? "الأسعار" : "Pricing"}</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">{ar ? "القوالب" : "Templates"}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{ar ? "الشركة" : "Company"}</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">{ar ? "من نحن" : "About Us"}</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">{ar ? "المدونة" : "Blog"}</a></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">{ar ? "تواصل معنا" : "Contact Us"}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{ar ? "الدعم" : "Support"}</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">{ar ? "مركز المساعدة" : "Help Center"}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{ar ? "التوثيق" : "Documentation"}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{ar ? "المجتمع" : "Community"}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm mb-4 md:mb-0">{ar ? "© 2024 فيل كرافت. جميع الحقوق محفوظة." : "© 2024 FilCraft. All rights reserved."}</p>
          <p className="text-background/80 text-sm flex items-center gap-2">
            {ar ? "صُنع بـ" : "Made with"} <Heart className="w-4 h-4 text-accent fill-accent" /> {ar ? "للحرفيين في كل مكان" : "for crafters everywhere"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
