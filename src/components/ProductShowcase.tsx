import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductShowcase = () => {
  const products = [
    {
      title: "Embroidered Cushion",
      description: "Traditional Palestinian tatreez patterns on premium fabric",
      price: "$45.00",
      category: "Home Decor",
      image: "https://images.unsplash.com/photo-1629978101130-4b7d3b0a6de8?w=400&h=300&fit=crop",
    },
    {
      title: "Handwoven Scarf",
      description: "Soft, luxurious scarf with geometric embroidery details",
      price: "$32.00",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
    },
    {
      title: "Ceramic Bowl Set",
      description: "Hand-painted ceramics with traditional motifs",
      price: "$68.00",
      category: "Kitchenware",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
    },
    {
      title: "Embroidered Tote Bag",
      description: "Practical and stylish with authentic Palestinian patterns",
      price: "$38.00",
      category: "Bags",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Showcase Your Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful product cards that highlight the quality and craftsmanship of your work
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
                  View Details
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
