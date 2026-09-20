import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <Banner />
      <div className="pt-12">
        <CardPanel />
      </div>
    </main>
  );
}