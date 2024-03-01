import AddCartDialog from "@/components/dialogs/productDialog/addCartDialog";
import RentDialog from "@/components/dialogs/productDialog/rentDialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <RentDialog />
      <AddCartDialog />
    </>
  );
}
