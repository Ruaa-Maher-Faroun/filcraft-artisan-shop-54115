import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">فيل كرافت</h3>
            <p className="text-background/80">
              تمكين الأعمال الصغيرة من خلال التصميم الجميل والتكنولوجيا الحديثة.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">المنتج</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">المميزات</a></li>
              <li><a href="#" className="hover:text-background transition-colors">الأسعار</a></li>
              <li><a href="#" className="hover:text-background transition-colors">القوالب</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-background transition-colors">المدونة</a></li>
              <li><a href="#" className="hover:text-background transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-background transition-colors">التوثيق</a></li>
              <li><a href="#" className="hover:text-background transition-colors">المجتمع</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm mb-4 md:mb-0">
            © 2024 فيل كرافت. جميع الحقوق محفوظة.
          </p>
          <p className="text-background/80 text-sm flex items-center gap-2">
            صُنع بـ <Heart className="w-4 h-4 text-accent fill-accent" /> للحرفيين في كل مكان
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
