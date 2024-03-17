export async function GET(request: Request) {
  return Response.json({ hoge: "hoge" });
}

export async function POST(request: Request) {
  return Response.json({ hoge: "fuga" });
}
