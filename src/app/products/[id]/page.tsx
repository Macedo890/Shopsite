import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { FetchProduct, FetchProducts } from "@/services/database";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const products = await FetchProducts();

  return products.map((product) => ({ id: product.id.toString() }));
}

const fecthproduct = async (id: string) => {
  const data = (await FetchProducts()).find(
    (product) => product.id === Number(id)
  );

  if (data && typeof id === "string") {
    const product = await FetchProduct(id);
    return product;
  } else {
    redirect("/");
  }
};

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await fecthproduct(id);

  return (
    <main>
      <ProductDetails product={product!} />
    </main>
  );
}
