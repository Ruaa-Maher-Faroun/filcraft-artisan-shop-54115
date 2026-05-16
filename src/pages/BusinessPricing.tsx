import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Store, Rocket, Crown } from "lucide-react";

const BusinessPricing = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const plans = [
    {
      icon: Store,
      nameAr: "البداية", nameEn: "Starter",
      price: 0,
      taglineAr: "ابدأ بيع منتجاتك مجاناً", taglineEn: "Start selling for free",
      featuresAr: ["حتى 10 منتجات", "صفحة متجر أساسية", "عمولة 10% على المبيعات", "دعم عبر البريد"],
      featuresEn: ["Up to 10 products", "Basic store page", "10% sales commission", "Email support"],
    },
    {
      icon: Rocket,
      nameAr: "النمو", nameEn: "Growth",
      price: 29,
      taglineAr: "للأعمال التي تنمو بسرعة", taglineEn: "For fast-growing businesses",
      featuresAr: ["منتجات غير محدودة", "تخصيص كامل للمتجر", "عمولة 5% فقط", "تحليلات متقدمة", "كوبونات وعروض", "دعم أولوية"],
      featuresEn: ["Unlimited products", "Full store customization", "Only 5% commission", "Advanced analytics", "Coupons & promos", "Priority support"],
      popular: true,
    },
    {
      icon: Crown,
      nameAr: "المؤسسي", nameEn: "Enterprise",
      price: 99,
      taglineAr: "للعلامات الكبرى والموزعين", taglineEn: "For large brands & distributors",
      featuresAr: ["كل مميزات النمو", "بدون عمولة على المبيعات", "نطاق مخصص", "API للتكامل", "متاجر متعددة", "مدير حساب مخصص"],
      featuresEn: ["Everything in Growth", "0% commission on sales", "Custom domain", "Integration API", "Multiple stores", "Dedicated account manager"],
    },
  ];

  const compare = [
    { keyAr: "عدد المنتجات", keyEn: "Products", values: ["10", "∞", "∞"] },
    { keyAr: "العمولة على المبيعات", keyEn: "Sales commission", values: ["10%", "5%", "0%"] },
    { keyAr: "تخصيص التصميم", keyEn: "Design customization", values: ["—", "✓", "✓"] },
    { keyAr: "تحليلات متقدمة", keyEn: "Advanced analytics", values: ["—", "✓", "✓"] },
    { keyAr: "نطاق مخصص", keyEn: "Custom domain", values: ["—", "—", "✓"] },
    { keyAr: "API للتكامل", keyEn: "Integration API", values: ["—", "—", "✓"] },
    { keyAr: "مدير حساب", keyEn: "Account manager", values: ["—", "—", "✓"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Sparkles className="w-3 h-3" /> {ar ? "للأعمال والحرفيين" : "For businesses & artisans"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {ar ? "خطط مصممة لنمو أعمالك" : "Plans built to grow your business"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {ar ? "ابدأ مجاناً وانمو بدون قيود. ادفع عند البيع، أو اشترك بخطة شهرية." : "Start free and scale without limits. Pay as you sell, or subscribe monthly."}
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card key={i} className={`border-border relative flex flex-col ${p.popular ? "ring-2 ring-primary shadow-2xl md:scale-105" : ""}`}>
                  {p.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      {ar ? "الأكثر شيوعاً" : "Most popular"}
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{ar ? p.nameAr : p.nameEn}</CardTitle>
                    <CardDescription>{ar ? p.taglineAr : p.taglineEn}</CardDescription>
                    <div className="pt-3">
                      <span className="text-4xl font-bold text-foreground">{ar ? "" : "$"}{p.price}{ar ? " دولار" : ""}</span>
                      <span className="text-muted-foreground"> {ar ? "/ شهرياً" : "/ month"}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {(ar ? p.featuresAr : p.featuresEn).map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${p.popular ? "bg-primary hover:bg-accent text-primary-foreground" : ""}`}
                      variant={p.popular ? "default" : "outline"}
                    >
                      {p.price === 0 ? (ar ? "ابدأ مجاناً" : "Start free") : (ar ? "اختر هذه الخطة" : "Choose this plan")}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">{ar ? "قارن بين الخطط" : "Compare plans"}</h2>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-4 p-4 border-b border-border bg-muted/30 font-semibold text-sm">
              <div>{ar ? "الميزة" : "Feature"}</div>
              {plans.map((p, i) => <div key={i} className="text-center">{ar ? p.nameAr : p.nameEn}</div>)}
            </div>
            {compare.map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-4 border-b border-border last:border-0 text-sm">
                <div className="text-muted-foreground">{ar ? row.keyAr : row.keyEn}</div>
                {row.values.map((v, j) => <div key={j} className="text-center font-medium">{v}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">{ar ? "جاهز لبدء البيع؟" : "Ready to start selling?"}</h2>
          <p className="text-muted-foreground mb-6">
            {ar ? "انضم لمئات الحرفيين الذين يبيعون منتجاتهم على FilCraft." : "Join hundreds of artisans selling their products on FilCraft."}
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/dashboard/business">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                {ar ? "ابدأ متجرك الآن" : "Start your store now"}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">{ar ? "تحدث مع المبيعات" : "Talk to sales"}</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPricing;