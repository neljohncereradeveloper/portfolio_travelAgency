import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col bg-gray-50">
      <Navbar />
      <hr />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
}
