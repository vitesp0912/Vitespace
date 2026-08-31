import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.growth);

export default function GrowthLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.growth)} />
      {children}
    </>
  );
}
