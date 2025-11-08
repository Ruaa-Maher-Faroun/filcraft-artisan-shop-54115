import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductShowcase = () => {
  const products = [
    {
      title: "وسادة مطرزة",
      description: "أنماط التطريز الفلسطيني التقليدي على قماش فاخر",
      price: "45.00 دولار",
      category: "ديكور منزلي",
      image: "https://images.unsplash.com/photo-1629978101130-4b7d3b0a6de8?w=400&h=300&fit=crop",
    },
    {
      title: "وشاح منسوج يدوياً",
      description: "وشاح ناعم وفاخر بتفاصيل تطريز هندسية",
      price: "32.00 دولار",
      category: "إكسسوارات",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
    },
    {
      title: "طقم أوعية خزفية",
      description: "خزفيات مرسومة يدوياً بزخارف تقليدية",
      price: "68.00 دولار",
      category: "أدوات مطبخ",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
    },
    {
      title: "حقيبة يد مطرزة",
      description: "عملية وأنيقة بأنماط فلسطينية أصيلة",
      price: "38.00 دولار",
      category: "حقائب",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">اعرض منتجاتك</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            بطاقات منتجات جميلة تبرز جودة وحرفية عملك
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {product.category}
                  </Badge>
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                </div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
                  عرض التفاصيل
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
