import { cache } from "react";

export const fetchData = cache(async () => {
  // 別のNext.jsでPort=3001でAPIが起動している想定
  const res = await fetch("http://localhost:3000/api/sample-api", {cache: "no-store"});
  const { data } = await res.json();
  return data;
});