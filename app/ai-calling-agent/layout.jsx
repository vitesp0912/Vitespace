import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.calling);

export default function AICallingAgentLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.calling)} />
      {children}
    </>
  );
}
