import Navbar from "./navbar";

export default function LayoutTwo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col">
      <Navbar />
      <main className="absolute top-0 inset-x-0 flex flex-col">{children}</main>
    </div>
  );
}
