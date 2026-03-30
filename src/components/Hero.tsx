import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {ar ? "اعرض حرفتك،" : "Showcase Your Craft,"}
            <span className="text-primary block">{ar ? "نمِّ عملك" : "Grow Your Business"}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {ar
              ? "فيل كرافت تمكّن الأعمال الصغيرة من عرض وبيع منتجاتها المصنوعة يدوياً بشكل جميل عبر الإنترنت. مستوحاة من التراث الفلسطيني، مصممة لرواد الأعمال المعاصرين."
              : "FilCraft empowers small businesses to beautifully showcase and sell their handmade products online. Inspired by Palestinian heritage, designed for modern entrepreneurs."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold">
              {ar ? "ابدأ الآن" : "Get Started"}
            </Button>
            <Link to="/#features">
              <Button size="lg" variant="outline" className="border-2 border-border hover:bg-secondary w-full">
                {ar ? "اعرف المزيد" : "Learn More"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
