import Card from "@/components/layout/Card";
import Hero from "@/components/layout/Hero";
import Learning from "@/components/layout/Learning";
import Subscribe from "@/components/layout/Subscribe";
import Testimonials from "@/components/layout/Testimonials";
import Tracks from "@/components/layout/Tracks";
import Teacher from "@/components/widgets/Teacher";

export default function Home() {
  return (
    <div >
      <Hero />
      <Card />
      <Tracks />
      <Learning />
      <Testimonials />
      <Teacher />
      <Subscribe />
    </div>
  );
}
