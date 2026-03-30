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
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(ar ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">{ar ? "تواصل معنا" : "Contact Us"}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{ar ? "نحن هنا لمساعدتك. أرسل لنا رسالة وسنرد في أقرب وقت." : "We're here to help. Send us a message and we'll get back to you shortly."}</p>
          </div>
          <Card className="max-w-xl mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-2xl">{ar ? "تواصل معنا" : "Contact Us"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{ar ? "الاسم" : "Name"}</Label>
                  <Input id="name" placeholder={ar ? "أدخل اسمك" : "Enter your name"} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{ar ? "البريد الإلكتروني" : "Email"}</Label>
                  <Input id="email" type="email" placeholder={ar ? "أدخل بريدك الإلكتروني" : "Enter your email"} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{ar ? "الرسالة" : "Message"}</Label>
                  <Textarea id="message" placeholder={ar ? "اكتب رسالتك هنا..." : "Write your message here..."} rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                  {ar ? "إرسال" : "Send"}
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
