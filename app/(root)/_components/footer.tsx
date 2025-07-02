import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { paymentImages } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-[#0F172A] pt-20 pb-10 px-4 text-white">
      {/* CTA Section */}
      <div className="relative w-full max-w-6xl mx-auto bg-[#1E293B] rounded-xl flex flex-col md:flex-row items-center justify-between px-10 py-10">
        {/* Left text */}
        <div className="max-w-xl space-y-4">
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Kasb tanlashdagi birinchi yordamni beramiz!
          </p>
          <p className="font-medium">
            Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz
          </p>
        </div>

        {/* Right form card */}
        <div className="bg-[#0F172A] p-6 rounded-xl shadow-md w-full max-w-sm mt-10 md:mt-0">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Ismingiz</Label>
              <Input id="name" placeholder="Ismingizni yozing" />
            </div>
            <div>
              <Label htmlFor="phone">Telefon raqamingiz</Label>
              <Input id="phone" placeholder="+998 90 123 45 67" />
            </div>
            <div>
              <Label htmlFor="telegram">Telegram username</Label>
              <Input id="telegram" placeholder="@username" />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-2">
              Jonatish
            </Button>
            <p className="text-xs text-white/60 mt-2">
              Tugmani bosib, <span className="underline">maxfiylik siyosati</span> va{" "}
              <span className="underline">foydalanuvchi shartnomasining</span> shartlarini
              qabul qilgan bo’lasiz
            </p>
          </form>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="font-bold text-xl">mohirdev</div>
            <div className="text-lg font-semibold">+998 (78) 113 62 72</div>
            <p className="text-white/70">
              Toshkent shahar, Yashnobod tumani, Mahtumquli ko’chasi, 112-uy
            </p>
          </div>

          {/* Platforma */}
          <div className="space-y-2">
            <div className="font-semibold">Platforma</div>
            <p>Kurslar</p>
            <p>Kasblar</p>
          </div>

          {/* Kompaniya */}
          <div className="space-y-2">
            <div className="font-semibold">Kompaniya</div>
            <p>Biz haqimizda</p>
            <p>Blog</p>
            <p>Ommaviy oferta</p>
            <p>Maxfiylik siyosati</p>
          </div>

          {/* Ma’lumot */}
          <div className="space-y-2">
            <div className="font-semibold">Ma’lumot</div>
            <p>Bog’lanish</p>
            <p>Bo’lib to’lash</p>
            <p>FAQ</p>
            <p>Fikrlar</p>
          </div>
        </div>

        {/* Certificates and Payments */}
        <div className="flex flex-wrap items-center justify-between mt-12 gap-6">
          {/* Certificates (mocked images) */}
          <div className="flex gap-4">
            <Image src="/images/cert1.png" alt="Tasdiqnoma" width={60} height={60} />
            <Image src="/images/cert2.png" alt="Guvohnoma" width={60} height={60} />
            <Image src="/images/cert3.png" alt="IT Park" width={60} height={60} />
          </div>

          {/* Payments */}
          <div className="flex gap-4">
            {paymentImages.map((item) => (
              <Image className="text-white" key={item.name} src={item.src} alt={item.name} width={50} height={30} />
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-white/20" />
        <p className="text-center text-sm text-white/70">
          © {new Date().getFullYear()} Wenaco_dev. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
};

export default Footer;
