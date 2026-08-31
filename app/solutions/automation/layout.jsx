import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.automation);

export default function AutomationLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.automation)} />
      {children}
    </>
  );
}
