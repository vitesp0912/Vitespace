import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.chatbots);

export default function ChatbotsLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.chatbots)} />
      {children}
    </>
  );
}
