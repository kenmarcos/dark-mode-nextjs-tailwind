import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Dark mode usando Next.js e Tailwind CSS"
        />

        <title>Dark Mode - Next.js + Tailwind</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  );
};
