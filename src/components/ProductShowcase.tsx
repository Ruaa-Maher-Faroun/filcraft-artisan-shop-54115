import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1629978101130-4b7d3b0a6de8?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
];

const ProductShowcase = () => {
  const { lang } = useLanguage();
  const ar = lang === "ar";

  const products = [
    { title: ar ? "وسادة مطرزة" : "Embroidered Cushion", description: ar ? "أنماط التطريز الفلسطيني التقليدي على قماش فاخر" : "Traditional Palestinian embroidery patterns on premium fabric", price: ar ? "45.00 دولار" : "$45.00", category: ar ? "ديكور منزلي" : "Home Decor" },
    { title: ar ? "وشاح منسوج يدوياً" : "Hand-Woven Scarf", description: ar ? "وشاح ناعم وفاخر بتفاصيل تطريز هندسية" : "Soft and luxurious scarf with geometric embroidery details", price: ar ? "32.00 دولار" : "$32.00", category: ar ? "إكسسوارات" : "Accessories" },
    { title: ar ? "طقم أوعية خزفية" : "Ceramic Bowl Set", description: ar ? "خزفيات مرسومة يدوياً بزخارف تقليدية" : "Hand-painted ceramics with traditional ornamental designs", price: ar ? "68.00 دولار" : "$68.00", category: ar ? "أدوات مطبخ" : "Kitchenware" },
    { title: ar ? "حقيبة يد مطرزة" : "Embroidered Handbag", description: ar ? "عملية وأنيقة بأنماط فلسطينية أصيلة" : "Practical and elegant with authentic Palestinian patterns", price: ar ? "38.00 دولار" : "$38.00", category: ar ? "حقائب" : "Bags" },
  ];

  return (
    <section id="showcase" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{ar ? "اعرض منتجاتك" : "Showcase Your Products"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{ar ? "بطاقات منتجات جميلة تبرز جودة وحرفية عملك" : "Beautiful product cards that highlight the quality and craftsmanship of your work"}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Card key={i} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={images[i]} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{p.category}</Badge>
                  <span className="text-lg font-bold text-primary">{p.price}</span>
                </div>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{p.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">{ar ? "عرض التفاصيل" : "View Details"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
