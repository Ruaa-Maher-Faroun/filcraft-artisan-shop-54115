import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Globe, LayoutDashboard, Store as StoreIcon, Users, Shield, DollarSign, Search, MoreHorizontal, Plus, Ban, CheckCircle } from "lucide-react";
import { mockAdminBusinesses, mockAdminUsers, mockAdmins } from "@/data/mock";
import filcraftLogo from "@/assets/filcraft-logo.png";

const AdminDashboard = () => {
  const { lang, toggle } = useLanguage();
  const ar = lang === "ar";
  const [tab, setTab] = useState("overview");

  const nav = [
    { id: "overview", labelAr: "نظرة عامة", labelEn: "Overview", icon: LayoutDashboard },
    { id: "businesses", labelAr: "الأعمال", labelEn: "Businesses", icon: StoreIcon },
    { id: "users", labelAr: "المستخدمون", labelEn: "Users", icon: Users },
    { id: "admins", labelAr: "المسؤولون", labelEn: "Admins", icon: Shield },
  ];

  const totalRevenue = mockAdminBusinesses.reduce((a, b) => a + b.revenue, 0);

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <aside className="hidden md:flex w-64 bg-foreground text-background flex-col">
        <Link to="/" className="flex items-center gap-3 p-6 border-b border-background/10">
          <img src={filcraftLogo} alt="" className="h-8 w-8" />
          <div>
            <p className="font-bold">FilCraft</p>
            <p className="text-xs opacity-70">{ar ? "لوحة المسؤول" : "Admin Panel"}</p>
          </div>
        </Link>
        <nav className="p-4 space-y-1 flex-1">
          {nav.map((n) => {
            const Icon = n.icon;
            const active = tab === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setTab(n.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "text-background/70 hover:bg-background/10"}`}
              >
                <Icon className="w-4 h-4" />
                {ar ? n.labelAr : n.labelEn}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div>
            <p className="text-xs text-muted-foreground">{ar ? "السوبر أدمن" : "Super Admin"}</p>
            <p className="font-semibold">{ar ? "إدارة المنصة" : "Platform management"}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={toggle}><Globe className="w-4 h-4" /></Button>
        </header>

        <main className="p-6 flex-1 space-y-6">
          {tab === "overview" && (
            <>
              <div>
                <h1 className="text-2xl font-bold">{ar ? "نظرة عامة على المنصة" : "Platform overview"}</h1>
                <p className="text-muted-foreground text-sm">{ar ? "إحصائيات FilCraft الإجمالية" : "Aggregate FilCraft statistics"}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: StoreIcon, labelAr: "الأعمال النشطة", labelEn: "Active businesses", value: mockAdminBusinesses.filter(b => b.status === "active").length },
                  { icon: Users, labelAr: "إجمالي المستخدمين", labelEn: "Total users", value: 1248 },
                  { icon: DollarSign, labelAr: "إجمالي الإيرادات", labelEn: "Total revenue", value: `$${totalRevenue.toLocaleString()}` },
                  { icon: Shield, labelAr: "المسؤولون", labelEn: "Admins", value: mockAdmins.length },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i}>
                      <CardContent className="p-5">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"><Icon className="w-5 h-5 text-primary" /></div>
                        <p className="text-sm text-muted-foreground">{ar ? s.labelAr : s.labelEn}</p>
                        <p className="text-2xl font-bold">{s.value}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>{ar ? "أحدث الأعمال" : "Recent businesses"}</CardTitle>
                  <CardDescription>{ar ? "آخر الأعمال المسجلة" : "Latest registered businesses"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{ar ? "الاسم" : "Name"}</TableHead>
                        <TableHead>{ar ? "المالك" : "Owner"}</TableHead>
                        <TableHead>{ar ? "الخطة" : "Plan"}</TableHead>
                        <TableHead>{ar ? "الإيرادات" : "Revenue"}</TableHead>
                        <TableHead>{ar ? "الحالة" : "Status"}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockAdminBusinesses.map((b) => (
                        <TableRow key={b.id}>
                          <TableCell className="font-medium">{b.name}</TableCell>
                          <TableCell>{b.owner}</TableCell>
                          <TableCell><Badge variant="secondary">{b.plan}</Badge></TableCell>
                          <TableCell>${b.revenue.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className={b.status === "active" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}>
                              {b.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </>
          )}

          {tab === "businesses" && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{ar ? "كل الأعمال" : "All businesses"}</CardTitle>
                  <CardDescription>{ar ? "إدارة المتاجر على المنصة" : "Manage stores on the platform"}</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input className="ps-9 w-64" placeholder={ar ? "بحث..." : "Search..."} />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{ar ? "الاسم" : "Name"}</TableHead>
                      <TableHead>{ar ? "المالك" : "Owner"}</TableHead>
                      <TableHead>{ar ? "الخطة" : "Plan"}</TableHead>
                      <TableHead>{ar ? "الإيرادات" : "Revenue"}</TableHead>
                      <TableHead>{ar ? "الحالة" : "Status"}</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAdminBusinesses.map((b) => (
                      <TableRow key={b.id}>
                        <TableCell className="font-medium">{b.name}</TableCell>
                        <TableCell>{b.owner}</TableCell>
                        <TableCell><Badge variant="secondary">{b.plan}</Badge></TableCell>
                        <TableCell>${b.revenue.toLocaleString()}</TableCell>
                        <TableCell><Badge className={b.status === "active" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}>{b.status}</Badge></TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {tab === "users" && (
            <Card>
              <CardHeader>
                <CardTitle>{ar ? "المستخدمون (المشترون)" : "Users (Buyers)"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{ar ? "الاسم" : "Name"}</TableHead>
                      <TableHead>{ar ? "البريد" : "Email"}</TableHead>
                      <TableHead>{ar ? "انضم" : "Joined"}</TableHead>
                      <TableHead>{ar ? "الحالة" : "Status"}</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAdminUsers.map((u) => (
                      <TableRow key={u.id}>
                        <TableCell className="font-medium">{u.name}</TableCell>
                        <TableCell>{u.email}</TableCell>
                        <TableCell>{u.joined}</TableCell>
                        <TableCell>
                          <Badge className={u.status === "active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}>{u.status}</Badge>
                        </TableCell>
                        <TableCell>
                          {u.status === "active"
                            ? <Button variant="ghost" size="sm" className="text-destructive"><Ban className="w-4 h-4" />{ar ? "تعليق" : "Suspend"}</Button>
                            : <Button variant="ghost" size="sm" className="text-primary"><CheckCircle className="w-4 h-4" />{ar ? "تفعيل" : "Activate"}</Button>}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {tab === "admins" && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{ar ? "المسؤولون" : "Admins"}</CardTitle>
                <Button className="bg-primary hover:bg-accent text-primary-foreground"><Plus className="w-4 h-4" />{ar ? "إضافة مسؤول" : "Add admin"}</Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{ar ? "الاسم" : "Name"}</TableHead>
                      <TableHead>{ar ? "البريد" : "Email"}</TableHead>
                      <TableHead>{ar ? "الدور" : "Role"}</TableHead>
                      <TableHead>{ar ? "آخر نشاط" : "Last active"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAdmins.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell className="font-medium">{a.name}</TableCell>
                        <TableCell>{a.email}</TableCell>
                        <TableCell><Badge className="bg-accent/10 text-accent">{a.role}</Badge></TableCell>
                        <TableCell>{a.lastActive}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;