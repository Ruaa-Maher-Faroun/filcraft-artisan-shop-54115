import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, LayoutDashboard, Package, ShoppingBag, Settings, BarChart3, Plus, Search, ExternalLink, DollarSign, Users, TrendingUp, Eye } from "lucide-react";
import { mockStores, mockBusinessStats, mockOrders } from "@/data/mock";
import filcraftLogo from "@/assets/filcraft-logo.png";

const BusinessDashboard = () => {
  const { lang, toggle } = useLanguage();
  const ar = lang === "ar";
  const store = mockStores[0];
  const [tab, setTab] = useState("overview");

  const nav = [
    { id: "overview", labelAr: "نظرة عامة", labelEn: "Overview", icon: LayoutDashboard },
    { id: "products", labelAr: "المنتجات", labelEn: "Products", icon: Package },
    { id: "orders", labelAr: "الطلبات", labelEn: "Orders", icon: ShoppingBag },
    { id: "analytics", labelAr: "التحليلات", labelEn: "Analytics", icon: BarChart3 },
    { id: "settings", labelAr: "الإعدادات", labelEn: "Settings", icon: Settings },
  ];

  const statusColors: Record<string, string> = {
    completed: "bg-primary/10 text-primary",
    shipped: "bg-accent/10 text-accent",
    pending: "bg-secondary text-secondary-foreground",
    cancelled: "bg-destructive/10 text-destructive",
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-card border-e border-border flex-col">
        <Link to="/" className="flex items-center gap-3 p-6 border-b border-border">
          <img src={filcraftLogo} alt="" className="h-8 w-8" />
          <span className="font-bold text-foreground">FilCraft</span>
        </Link>
        <nav className="p-4 space-y-1 flex-1">
          {nav.map((n) => {
            const Icon = n.icon;
            const active = tab === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setTab(n.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted"}`}
              >
                <Icon className="w-4 h-4" />
                {ar ? n.labelAr : n.labelEn}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <Link to={`/store/${store.id}`} target="_blank">
            <Button variant="outline" className="w-full"><ExternalLink className="w-4 h-4" />{ar ? "عرض المتجر" : "View store"}</Button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div>
            <p className="text-xs text-muted-foreground">{ar ? "مرحباً بعودتك" : "Welcome back"}</p>
            <p className="font-semibold text-foreground">{ar ? store.nameAr : store.nameEn}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle}><Globe className="w-4 h-4" /></Button>
            <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">A</div>
          </div>
        </header>

        <main className="p-6 flex-1">
          {tab === "overview" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{ar ? "نظرة عامة" : "Overview"}</h1>
                <p className="text-muted-foreground text-sm">{ar ? "ملخص أداء متجرك هذا الشهر" : "Summary of your store performance this month"}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: DollarSign, labelAr: "الإيرادات", labelEn: "Revenue", value: `$${mockBusinessStats.revenue.toLocaleString()}`, change: "+12%" },
                  { icon: ShoppingBag, labelAr: "الطلبات", labelEn: "Orders", value: mockBusinessStats.orders, change: "+8%" },
                  { icon: Eye, labelAr: "الزوار", labelEn: "Visitors", value: mockBusinessStats.visitors.toLocaleString(), change: "+24%" },
                  { icon: TrendingUp, labelAr: "معدل التحويل", labelEn: "Conversion", value: `${mockBusinessStats.conversion}%`, change: "+0.4%" },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i}>
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">{s.change}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{ar ? s.labelAr : s.labelEn}</p>
                        <p className="text-2xl font-bold text-foreground">{s.value}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>{ar ? "أحدث الطلبات" : "Recent orders"}</CardTitle>
                  <CardDescription>{ar ? "آخر 5 طلبات في متجرك" : "Your last 5 orders"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{ar ? "الطلب" : "Order"}</TableHead>
                        <TableHead>{ar ? "العميل" : "Customer"}</TableHead>
                        <TableHead>{ar ? "المنتج" : "Product"}</TableHead>
                        <TableHead>{ar ? "المبلغ" : "Amount"}</TableHead>
                        <TableHead>{ar ? "الحالة" : "Status"}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockOrders.map((o) => (
                        <TableRow key={o.id}>
                          <TableCell className="font-medium">{o.id}</TableCell>
                          <TableCell>{o.customer}</TableCell>
                          <TableCell>{o.product}</TableCell>
                          <TableCell>${o.amount}</TableCell>
                          <TableCell><Badge className={statusColors[o.status]}>{o.status}</Badge></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {tab === "products" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{ar ? "المنتجات" : "Products"}</h1>
                <Button className="bg-primary hover:bg-accent text-primary-foreground"><Plus className="w-4 h-4" />{ar ? "إضافة منتج" : "Add product"}</Button>
              </div>
              <div className="relative max-w-sm">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input className="ps-9" placeholder={ar ? "ابحث عن منتج..." : "Search products..."} />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {store.products.map((p) => (
                  <Card key={p.id} className="overflow-hidden">
                    <img src={p.image} alt="" className="aspect-[4/3] w-full object-cover" />
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold">{ar ? p.nameAr : p.nameEn}</p>
                        <span className="text-primary font-bold">${p.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{ar ? p.categoryAr : p.categoryEn}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">{ar ? "تعديل" : "Edit"}</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">{ar ? "حذف" : "Delete"}</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {tab === "orders" && (
            <Card>
              <CardHeader>
                <CardTitle>{ar ? "كل الطلبات" : "All orders"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{ar ? "الطلب" : "Order"}</TableHead>
                      <TableHead>{ar ? "العميل" : "Customer"}</TableHead>
                      <TableHead>{ar ? "المنتج" : "Product"}</TableHead>
                      <TableHead>{ar ? "التاريخ" : "Date"}</TableHead>
                      <TableHead>{ar ? "المبلغ" : "Amount"}</TableHead>
                      <TableHead>{ar ? "الحالة" : "Status"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((o) => (
                      <TableRow key={o.id}>
                        <TableCell className="font-medium">{o.id}</TableCell>
                        <TableCell>{o.customer}</TableCell>
                        <TableCell>{o.product}</TableCell>
                        <TableCell>{o.date}</TableCell>
                        <TableCell>${o.amount}</TableCell>
                        <TableCell><Badge className={statusColors[o.status]}>{o.status}</Badge></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {tab === "analytics" && (
            <Card>
              <CardHeader>
                <CardTitle>{ar ? "التحليلات" : "Analytics"}</CardTitle>
                <CardDescription>{ar ? "أداء متجرك على مدار الوقت" : "Your store performance over time"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end gap-2">
                  {[40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 110].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => <span key={m}>{m}</span>)}
                </div>
              </CardContent>
            </Card>
          )}

          {tab === "settings" && (
            <Card>
              <CardHeader><CardTitle>{ar ? "إعدادات المتجر" : "Store settings"}</CardTitle></CardHeader>
              <CardContent className="space-y-4 max-w-xl">
                <div>
                  <label className="text-sm font-medium">{ar ? "اسم المتجر" : "Store name"}</label>
                  <Input defaultValue={ar ? store.nameAr : store.nameEn} />
                </div>
                <div>
                  <label className="text-sm font-medium">{ar ? "الوصف" : "Description"}</label>
                  <Input defaultValue={ar ? store.descriptionAr : store.descriptionEn} />
                </div>
                <div>
                  <label className="text-sm font-medium">{ar ? "الموقع" : "Location"}</label>
                  <Input defaultValue={ar ? store.locationAr : store.locationEn} />
                </div>
                <Button className="bg-primary hover:bg-accent text-primary-foreground">{ar ? "حفظ التغييرات" : "Save changes"}</Button>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;