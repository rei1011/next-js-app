export default function ParallelLayout({
  children,
  main,
  sidebar,
}: {
  children: React.ReactNode;
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div>{children}</div>
      <div>{main}</div>
      <div>{sidebar}</div>
    </div>
  );
}
