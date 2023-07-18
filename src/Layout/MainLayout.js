import Header from "@/components/Header";
import SH from "@/components/SH";
import Footer from "@/components/Footer";
export default function MainLayout({ children }) {
  return (
    <div className="min-h-full">
      <Header />
      <SH />
      <main>
        <div className="w-full  ">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
