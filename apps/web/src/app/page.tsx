"use client";
import { ChartsSection } from "@/components/charts/ChartsSection";
import { Header } from "@/components/ui/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 flex flex-col h-full ">
      <Header />
      <div className="px-10">
        <ChartsSection />
      </div>
    </div>
  );
}
