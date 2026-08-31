import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.products);

export default function DigitalProductsLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.products)} />
      {children}
    </>
  );
}
