import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.language === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">{t.contact.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>
          <Card className="max-w-xl mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-2xl">{t.contact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.name}</Label>
                  <Input id="name" placeholder={t.contact.namePlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.email}</Label>
                  <Input id="email" type="email" placeholder={t.contact.emailPlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea id="message" placeholder={t.contact.messagePlaceholder} rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
