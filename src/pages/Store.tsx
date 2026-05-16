import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ShoppingBag, Heart, Share2, MessageCircle } from "lucide-react";
import { mockStores } from "@/data/mock";

const Store = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const store = mockStores.find((s) => s.id === id) ?? mockStores[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cover + Identity */}
      <section className="relative">
        <div
          className="h-56 md:h-72 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${store.cover})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        </div>
        <div className="container mx-auto px-4 -mt-16 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
            <img
              src={store.logo}
              alt={ar ? store.nameAr : store.nameEn}
              className="h-28 w-28 md:h-32 md:w-32 rounded-2xl border-4 border-background shadow-xl object-cover bg-card"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {ar ? store.nameAr : store.nameEn}
                </h1>
                <Badge className="bg-primary text-primary-foreground">{ar ? "موثّق" : "Verified"}</Badge>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                {ar ? store.descriptionAr : store.descriptionEn}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-primary text-primary" /> {store.rating} ({store.reviews})</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {ar ? store.locationAr : store.locationEn}</span>
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> {store.products.length} {ar ? "منتج" : "products"}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon"><Heart className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>
              <Button className="bg-primary hover:bg-accent text-primary-foreground">
                <MessageCircle className="w-4 h-4" /> {ar ? "تواصل" : "Contact"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">{ar ? "منتجات المتجر" : "Store products"}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {store.products.map((p) => (
              <Card key={p.id} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={ar ? p.nameAr : p.nameEn} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{ar ? p.categoryAr : p.categoryEn}</Badge>
                    <span className="text-lg font-bold text-primary">{ar ? `${p.price} دولار` : `$${p.price}`}</span>
                  </div>
                  <CardTitle className="text-lg">{ar ? p.nameAr : p.nameEn}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{ar ? p.descriptionAr : p.descriptionEn}</CardDescription>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1 bg-primary hover:bg-accent text-primary-foreground">{ar ? "شراء الآن" : "Buy now"}</Button>
                  <Button variant="outline" size="icon"><Heart className="w-4 h-4" /></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other stores */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-4">{ar ? "متاجر أخرى قد تعجبك" : "Other stores you may like"}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mockStores.filter((s) => s.id !== store.id).map((s) => (
              <Link key={s.id} to={`/store/${s.id}`}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-4 flex items-center gap-3">
                    <img src={s.logo} className="h-12 w-12 rounded-lg object-cover" alt="" />
                    <div>
                      <p className="font-semibold text-sm">{ar ? s.nameAr : s.nameEn}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Star className="w-3 h-3 fill-primary text-primary" />{s.rating}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;