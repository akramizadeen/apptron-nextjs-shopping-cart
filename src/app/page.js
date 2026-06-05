import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5 px-10 py-5">
      <h2 className="text-2xl font-medium text-slate-700">Products</h2>
      <ProductList />
    </div>
  );
}
