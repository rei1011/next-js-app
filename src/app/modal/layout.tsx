import Link from "next/link";

export default function ModalLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/modal/login">Open modal</Link>
      </nav>
      <div className="flex flex-col">
        <div>{auth}</div>
        <div>{children}</div>
      </div>
    </>
  );
}
