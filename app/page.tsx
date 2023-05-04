import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Video from "@/components/Video";
import Modal from "@/components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Video />
      <Modal label="Login" />
    </main>
  );
}
