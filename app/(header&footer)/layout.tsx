import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Viewport } from "@/types/common";
import { headers } from "next/headers";
import React from "react";

export default function HeaderWithFooter({
  children,
  accountModal,
  cartModal,
}: {
  children: React.ReactNode;
  accountModal: React.ReactNode;
  cartModal: React.ReactNode;
}) {
  const head = headers();
  const viewport = head.get("viewport");
  return (
    <>
      <Header viewport={viewport as Viewport} />
      {children}
      <Footer />
      {accountModal}
      {cartModal}
    </>
  );
}
