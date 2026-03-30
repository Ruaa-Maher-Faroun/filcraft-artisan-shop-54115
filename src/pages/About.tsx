import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const values = ar
    ? ["الأصالة والجودة", "دعم المجتمع المحلي", "الابتكار والتطوير المستمر", "الشفافية والثقة"]
    : ["Authenticity & Quality", "Supporting Local Communities", "Continuous Innovation", "Transparency & Trust"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">{ar ? "من نحن" : "About Us"}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{ar ? "نحن فريق شغوف بدعم الحرفيين وأصحاب الأعمال الصغيرة" : "We are a passionate team dedicated to supporting artisans and small business owners"}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{ar ? "مهمتنا" : "Our Mission"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{ar ? "تمكين الحرفيين من عرض منتجاتهم والوصول إلى جمهور أوسع من خلال منصة رقمية جميلة وسهلة الاستخدام." : "To empower artisans to showcase their products and reach a wider audience through a beautiful and easy-to-use digital platform."}</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{ar ? "رؤيتنا" : "Our Vision"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{ar ? "أن نكون المنصة الأولى للحرفيين في العالم العربي لعرض وبيع منتجاتهم المصنوعة يدوياً." : "To be the leading platform for artisans in the Arab world to showcase and sell their handmade products."}</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">{ar ? "قيمنا" : "Our Values"}</h2>
            <ul className="space-y-3">
              {values.map((item, i) => (
                <li key={i} className="text-lg text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
