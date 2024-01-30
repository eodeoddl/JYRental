import UserProfileMenu from "@/components/user/userProfileMenu/userProfileMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserProfileMenu />
      {children}
    </>
  );
}
