import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">{t.about.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t.about.mission}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{t.about.missionText}</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t.about.vision}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{t.about.visionText}</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">{t.about.values}</h2>
            <ul className="space-y-3">
              {t.about.valuesItems.map((item, i) => (
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
