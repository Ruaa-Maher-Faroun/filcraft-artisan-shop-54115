import { Store, Layout, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Store,
      title: "واجهة متجرك الرقمية",
      description: "أنشئ مساحة جميلة لعرض منتجاتك مع ملفات تعريف قابلة للتخصيص تعكس علامتك التجارية.",
    },
    {
      icon: Layout,
      title: "بطاقات منتجات جميلة",
      description: "اعرض منتجاتك ببطاقات أنيقة ومتجاوبة تبرز حرفية عملك.",
    },
    {
      icon: TrendingUp,
      title: "نمِّ مبيعاتك",
      description: "اصل إلى المزيد من العملاء وأدر مخزونك بكفاءة من خلال منصتنا البديهية.",
    },
    {
      icon: Users,
      title: "مصمم للأعمال الصغيرة",
      description: "مصمم خصيصاً للحرفيين وأصحاب الأعمال الصغيرة الذين يقدرون الجودة والأصالة.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">كل ما تحتاجه للنجاح</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أدوات قوية مصممة لمساعدة عملك على النمو في السوق الرقمي
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
