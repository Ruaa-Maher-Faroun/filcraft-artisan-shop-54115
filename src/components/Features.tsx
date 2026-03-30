import { Store, Layout, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const Features = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const features = [
    { icon: Store, title: ar ? "واجهة متجرك الرقمية" : "Your Digital Storefront", description: ar ? "أنشئ مساحة جميلة لعرض منتجاتك مع ملفات تعريف قابلة للتخصيص تعكس علامتك التجارية." : "Create a beautiful space for your products with customizable profiles that reflect your brand." },
    { icon: Layout, title: ar ? "بطاقات منتجات جميلة" : "Beautiful Product Cards", description: ar ? "اعرض منتجاتك ببطاقات أنيقة ومتجاوبة تبرز حرفية عملك." : "Showcase your products with elegant, responsive cards that highlight your craftsmanship." },
    { icon: TrendingUp, title: ar ? "نمِّ مبيعاتك" : "Grow Your Sales", description: ar ? "اصل إلى المزيد من العملاء وأدر مخزونك بكفاءة من خلال منصتنا البديهية." : "Reach more customers and manage your inventory efficiently through our intuitive platform." },
    { icon: Users, title: ar ? "مصمم للأعمال الصغيرة" : "Built for Small Business", description: ar ? "مصمم خصيصاً للحرفيين وأصحاب الأعمال الصغيرة الذين يقدرون الجودة والأصالة." : "Specifically designed for artisans and small business owners who value quality and authenticity." },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{ar ? "كل ما تحتاجه للنجاح" : "Everything You Need to Succeed"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{ar ? "أدوات قوية مصممة لمساعدة عملك على النمو في السوق الرقمي" : "Powerful tools designed to help your business grow in the digital marketplace"}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{f.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
