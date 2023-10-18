import products from "@/../database.json";
import { ProductType } from "@/services/database";

export async function GET(request: Request, { params }: any) {
  const id = params.id;

  const product = products.find((p: ProductType) => p.id === Number(id));
  return Response.json(product);
}

export async function POST(request: Request) {
  return Response.json({ message: "Hello" });
}
