import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Globe, LayoutDashboard, Package, ShoppingBag, Settings, BarChart3, Plus, Search, ExternalLink, DollarSign, TrendingUp, Eye, Pencil, Trash2 } from "lucide-react";
import { mockStores, mockBusinessStats, mockOrders } from "@/data/mock";
import filcraftLogo from "@/assets/filcraft-logo.png";

type Product = {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: number;
  categoryAr: string;
  categoryEn: string;
  image: string;
};

type StoreProfile = {
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  locationAr: string;
  locationEn: string;
  logo: string;
  cover: string;
};

const STORAGE_KEY = "filcraft.business.store";
const PRODUCTS_KEY = "filcraft.business.products";

const initialStore = mockStores[0];
const initialProfile: StoreProfile = {
  nameAr: initialStore.nameAr,
  nameEn: initialStore.nameEn,
  descriptionAr: initialStore.descriptionAr,
  descriptionEn: initialStore.descriptionEn,
  locationAr: initialStore.locationAr,
  locationEn: initialStore.locationEn,
  logo: initialStore.logo,
  cover: initialStore.cover,
};

const emptyProduct: Product = {
  id: "",
  nameAr: "", nameEn: "",
  descriptionAr: "", descriptionEn: "",
  price: 0,
  categoryAr: "", categoryEn: "",
  image: "https://images.unsplash.com/photo-1629978101130-4b7d3b0a6de8?w=400&h=300&fit=crop",
};

const BusinessDashboard = () => {
  const { lang, toggle } = useLanguage();
  const ar = lang === "ar";
  const [tab, setTab] = useState("overview");

  // Persisted state
  const [profile, setProfile] = useState<StoreProfile>(() => {
    if (typeof window === "undefined") return initialProfile;
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : initialProfile;
  });
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window === "undefined") return initialStore.products;
    const raw = localStorage.getItem(PRODUCTS_KEY);
    return raw ? JSON.parse(raw) : initialStore.products;
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); }, [profile]);
  useEffect(() => { localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products)); }, [products]);

  // Editor drafts
  const [profileDraft, setProfileDraft] = useState<StoreProfile>(profile);
  useEffect(() => { setProfileDraft(profile); }, [profile]);

  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openNewProduct = () => {
    setEditing({ ...emptyProduct, id: `p_${Date.now()}` });
    setDialogOpen(true);
  };
  const openEditProduct = (p: Product) => {
    setEditing({ ...p });
    setDialogOpen(true);
  };
  const saveProduct = () => {
    if (!editing) return;
    if (!editing.nameEn.trim() && !editing.nameAr.trim()) {
      toast.error(ar ? "الرجاء إدخال اسم المنتج" : "Please enter a product name");
      return;
    }
    setProducts((prev) => {
      const exists = prev.some((p) => p.id === editing.id);
      return exists ? prev.map((p) => (p.id === editing.id ? editing : p)) : [editing, ...prev];
    });
    setDialogOpen(false);
    setEditing(null);
    toast.success(ar ? "تم حفظ المنتج" : "Product saved");
  };
  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success(ar ? "تم حذف المنتج" : "Product deleted");
  };
  const saveProfile = () => {
    setProfile(profileDraft);
    toast.success(ar ? "تم حفظ التغييرات" : "Changes saved");
  };
  const resetAll = () => {
    setProfile(initialProfile);
    setProducts(initialStore.products);
    toast.success(ar ? "تمت إعادة التعيين" : "Reset to defaults");
  };

  const filtered = products.filter((p) =>
    [p.nameAr, p.nameEn, p.categoryAr, p.categoryEn].some((v) => v.toLowerCase().includes(search.toLowerCase()))
  );

  const nav = [
    { id: "overview", labelAr: "نظرة عامة", labelEn: "Overview", icon: LayoutDashboard },
    { id: "products", labelAr: "المنتجات", labelEn: "Products", icon: Package },
    { id: "orders", labelAr: "الطلبات", labelEn: "Orders", icon: ShoppingBag },
    { id: "analytics", labelAr: "التحليلات", labelEn: "Analytics", icon: BarChart3 },
    { id: "settings", labelAr: "ملف المتجر", labelEn: "Store profile", icon: Settings },
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
        <div className="p-4 border-t border-border space-y-2">
          <Link to={`/store/${initialStore.id}`} target="_blank">
            <Button variant="outline" className="w-full"><ExternalLink className="w-4 h-4" />{ar ? "عرض المتجر" : "View store"}</Button>
          </Link>
          <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground" onClick={resetAll}>
            {ar ? "إعادة تعيين البيانات التجريبية" : "Reset mock data"}
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div>
            <p className="text-xs text-muted-foreground">{ar ? "مرحباً بعودتك" : "Welcome back"}</p>
            <p className="font-semibold text-foreground">{ar ? profile.nameAr : profile.nameEn}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle}><Globe className="w-4 h-4" /></Button>
            <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              {(ar ? profile.nameAr : profile.nameEn).charAt(0)}
            </div>
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
                <div>
                  <h1 className="text-2xl font-bold">{ar ? "المنتجات" : "Products"}</h1>
                  <p className="text-sm text-muted-foreground">{products.length} {ar ? "منتج في متجرك" : "products in your store"}</p>
                </div>
                <Button className="bg-primary hover:bg-accent text-primary-foreground" onClick={openNewProduct}>
                  <Plus className="w-4 h-4" />{ar ? "إضافة منتج" : "Add product"}
                </Button>
              </div>
              <div className="relative max-w-sm">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input className="ps-9" placeholder={ar ? "ابحث عن منتج..." : "Search products..."} value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              {filtered.length === 0 ? (
                <Card className="p-12 text-center text-muted-foreground">
                  <Package className="w-10 h-10 mx-auto mb-3 opacity-50" />
                  <p>{ar ? "لا توجد منتجات. أضف أول منتج لك!" : "No products yet. Add your first one!"}</p>
                </Card>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((p) => (
                    <Card key={p.id} className="overflow-hidden">
                      <img src={p.image} alt="" className="aspect-[4/3] w-full object-cover" />
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold">{ar ? p.nameAr || p.nameEn : p.nameEn || p.nameAr}</p>
                          <span className="text-primary font-bold">${p.price}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{ar ? p.categoryAr : p.categoryEn}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => openEditProduct(p)}>
                            <Pencil className="w-3.5 h-3.5" />{ar ? "تعديل" : "Edit"}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive" onClick={() => deleteProduct(p.id)}>
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
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
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Live preview */}
              <Card className="lg:col-span-1 overflow-hidden h-fit sticky top-6">
                <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${profileDraft.cover})` }} />
                <div className="p-4 -mt-10">
                  <img src={profileDraft.logo} alt="" className="h-16 w-16 rounded-xl border-4 border-card object-cover bg-card" />
                  <p className="font-bold mt-2">{ar ? profileDraft.nameAr : profileDraft.nameEn}</p>
                  <p className="text-xs text-muted-foreground mb-2">{ar ? profileDraft.locationAr : profileDraft.locationEn}</p>
                  <p className="text-sm text-muted-foreground line-clamp-3">{ar ? profileDraft.descriptionAr : profileDraft.descriptionEn}</p>
                </div>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>{ar ? "ملف المتجر" : "Store profile"}</CardTitle>
                  <CardDescription>{ar ? "حدّث معلومات متجرك العامة" : "Update your store's public details"}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>{ar ? "الاسم بالعربية" : "Name (Arabic)"}</Label>
                      <Input value={profileDraft.nameAr} onChange={(e) => setProfileDraft({ ...profileDraft, nameAr: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label>{ar ? "الاسم بالإنجليزية" : "Name (English)"}</Label>
                      <Input value={profileDraft.nameEn} onChange={(e) => setProfileDraft({ ...profileDraft, nameEn: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>{ar ? "الوصف بالعربية" : "Description (Arabic)"}</Label>
                      <Textarea rows={3} value={profileDraft.descriptionAr} onChange={(e) => setProfileDraft({ ...profileDraft, descriptionAr: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label>{ar ? "الوصف بالإنجليزية" : "Description (English)"}</Label>
                      <Textarea rows={3} value={profileDraft.descriptionEn} onChange={(e) => setProfileDraft({ ...profileDraft, descriptionEn: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>{ar ? "الموقع بالعربية" : "Location (Arabic)"}</Label>
                      <Input value={profileDraft.locationAr} onChange={(e) => setProfileDraft({ ...profileDraft, locationAr: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label>{ar ? "الموقع بالإنجليزية" : "Location (English)"}</Label>
                      <Input value={profileDraft.locationEn} onChange={(e) => setProfileDraft({ ...profileDraft, locationEn: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>{ar ? "رابط الشعار" : "Logo URL"}</Label>
                      <Input value={profileDraft.logo} onChange={(e) => setProfileDraft({ ...profileDraft, logo: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <Label>{ar ? "رابط صورة الغلاف" : "Cover image URL"}</Label>
                      <Input value={profileDraft.cover} onChange={(e) => setProfileDraft({ ...profileDraft, cover: e.target.value })} />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button className="bg-primary hover:bg-accent text-primary-foreground" onClick={saveProfile}>
                      {ar ? "حفظ التغييرات" : "Save changes"}
                    </Button>
                    <Button variant="outline" onClick={() => setProfileDraft(profile)}>
                      {ar ? "إلغاء" : "Cancel"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>

      {/* Product editor */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing && products.some((p) => p.id === editing.id) ? (ar ? "تعديل المنتج" : "Edit product") : (ar ? "منتج جديد" : "New product")}</DialogTitle>
            <DialogDescription>{ar ? "املأ تفاصيل المنتج باللغتين" : "Fill in product details in both languages"}</DialogDescription>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>{ar ? "الاسم (عربي)" : "Name (Arabic)"}</Label>
                  <Input value={editing.nameAr} onChange={(e) => setEditing({ ...editing, nameAr: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>{ar ? "الاسم (إنجليزي)" : "Name (English)"}</Label>
                  <Input value={editing.nameEn} onChange={(e) => setEditing({ ...editing, nameEn: e.target.value })} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>{ar ? "الوصف (عربي)" : "Description (Arabic)"}</Label>
                  <Textarea rows={2} value={editing.descriptionAr} onChange={(e) => setEditing({ ...editing, descriptionAr: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>{ar ? "الوصف (إنجليزي)" : "Description (English)"}</Label>
                  <Textarea rows={2} value={editing.descriptionEn} onChange={(e) => setEditing({ ...editing, descriptionEn: e.target.value })} />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label>{ar ? "الفئة (عربي)" : "Category (AR)"}</Label>
                  <Input value={editing.categoryAr} onChange={(e) => setEditing({ ...editing, categoryAr: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>{ar ? "الفئة (إنجليزي)" : "Category (EN)"}</Label>
                  <Input value={editing.categoryEn} onChange={(e) => setEditing({ ...editing, categoryEn: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>{ar ? "السعر (دولار)" : "Price (USD)"}</Label>
                  <Input type="number" min={0} value={editing.price} onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) || 0 })} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>{ar ? "رابط الصورة" : "Image URL"}</Label>
                <Input value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} />
                {editing.image && (
                  <img src={editing.image} alt="" className="mt-2 h-32 w-full object-cover rounded-md border border-border" />
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>{ar ? "إلغاء" : "Cancel"}</Button>
            <Button className="bg-primary hover:bg-accent text-primary-foreground" onClick={saveProduct}>
              {ar ? "حفظ" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BusinessDashboard;