import HeroSection from "@/components/HeroSection";
import Image from "next/image";

function Page() {
  return (
    <main className="">
      <div>
        <HeroSection
          title={"WATCH MOVIES TOGEATHER WITH FAMILY & FRIENDS"}
          imageUrl={"/home.svg"}
        />
      </div>
    </main>
  );
}

export default Page;
