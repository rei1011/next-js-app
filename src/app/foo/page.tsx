import { fetchData } from "@/app/fetchData";

export default async function Foo() {
  const data = await fetchData();

  return (
    <div className="bg-blue-300 p-4 border-2 border-gray-400 rounded">
      Foo : {data}
    </div>
  );
}