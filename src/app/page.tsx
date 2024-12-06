import Image from "next/image";
import Bash from "./components/Bash";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">My DevOps&apos; Journey</h1>
      <hr className="border-1 border-black"/>
      <Bash/>
    </div>
  );
}
