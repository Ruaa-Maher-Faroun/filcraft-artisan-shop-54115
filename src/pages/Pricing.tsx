import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const plans = [
    { name: ar ? "المجاني" : "Free", price: "0", period: ar ? "/شهرياً" : "/month", features: ar ? ["5 منتجات", "واجهة متجر أساسية", "دعم عبر البريد الإلكتروني"] : ["5 products", "Basic storefront", "Email support"] },
    { name: ar ? "الاحترافي" : "Professional", price: "29", period: ar ? "/شهرياً" : "/month", features: ar ? ["منتجات غير محدودة", "تخصيص كامل", "تحليلات متقدمة", "دعم أولوية"] : ["Unlimited products", "Full customization", "Advanced analytics", "Priority support"], popular: true },
    { name: ar ? "المؤسسي" : "Enterprise", price: "99", period: ar ? "/شهرياً" : "/month", features: ar ? ["كل مميزات الاحترافي", "متاجر متعددة", "API مخصص", "مدير حساب مخصص"] : ["All Pro features", "Multiple stores", "Custom API", "Dedicated account manager"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">{ar ? "الأسعار" : "Pricing"}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{ar ? "خطط مرنة تناسب جميع الأحجام" : "Flexible plans for businesses of all sizes"}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <Card key={i} className={`border-border relative ${plan.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    {ar ? "الأكثر شيوعاً" : "Most Popular"}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{ar ? "" : "$"}{plan.price}{ar ? " دولار" : ""}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-accent text-primary-foreground" : ""}`} variant={plan.popular ? "default" : "outline"}>
                    {ar ? "ابدأ الآن" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
