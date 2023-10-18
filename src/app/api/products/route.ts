import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../../database.json";

// export default function handler(req, res) {
//   res.status(200).json(products);
// }

export async function GET(request: Request) {
  return Response.json(products);
}

export async function POST(request: Request) {
  return Response.json({ message: "Hello" });
}
