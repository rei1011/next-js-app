import { fetchData } from "@/app/fetchData";

export default async function BarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchData();

  return (
    <div className="bg-gray-200 p-4 border-2 border-gray-400 rounded">
      Bar Layout : {data}
      {children}
    </div>
  );
}