import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.contact);

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.contact)} />
      {children}
    </>
  );
}
