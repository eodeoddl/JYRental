import Footer from "@/components/footer/footer";
import React from "react";

export default function HeaderWithFooter({
  children,
  // accountModal,
  // cartModal,
}: {
  children: React.ReactNode;
  // accountModal: React.ReactNode;
  // cartModal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* {accountModal} */}
      {/* {cartModal} */}
      <Footer />
    </>
  );
}
