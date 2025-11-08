import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            هل أنت مستعد لبدء البيع؟
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            انضم إلى فيل كرافت اليوم واعرض منتجاتك للعملاء الذين يقدرون الحرفية الأصيلة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-background text-foreground hover:bg-background/90 font-semibold"
            >
              أنشئ متجرك
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
