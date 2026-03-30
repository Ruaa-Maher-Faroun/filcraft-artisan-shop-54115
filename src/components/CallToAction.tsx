import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const CallToAction = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">{ar ? "هل أنت مستعد لبدء البيع؟" : "Ready to Start Selling?"}</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">{ar ? "انضم إلى فيل كرافت اليوم واعرض منتجاتك للعملاء الذين يقدرون الحرفية الأصيلة" : "Join FilCraft today and showcase your products to customers who appreciate authentic craftsmanship"}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 font-semibold">
              {ar ? "أنشئ متجرك" : "Create Your Store"}
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full">
                {ar ? "تواصل معنا" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
