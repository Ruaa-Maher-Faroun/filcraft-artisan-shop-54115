import { Store, Layout, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Store,
      title: "Your Digital Storefront",
      description: "Create a beautiful space to showcase your products with customizable profiles that reflect your brand.",
    },
    {
      icon: Layout,
      title: "Beautiful Product Cards",
      description: "Display your items with elegant, responsive cards that highlight the craftsmanship of your work.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Sales",
      description: "Reach more customers and manage your inventory efficiently with our intuitive platform.",
    },
    {
      icon: Users,
      title: "Built for Small Business",
      description: "Designed specifically for artisans and small business owners who value quality and authenticity.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to help your business thrive in the digital marketplace
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
