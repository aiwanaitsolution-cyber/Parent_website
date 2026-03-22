import { ProductsHero } from '../components/ProductsHero';
import { ProductsSuite } from '../components/ProductsSuite';
import { FinalCTA } from '../components/FinalCTA';

export function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsHero />
      <ProductsSuite />
      <FinalCTA />
    </div>
  );
}
