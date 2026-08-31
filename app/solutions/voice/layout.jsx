import JsonLd from '@/components/JsonLd';
import { createMetadata, pageSchemas, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.voice);

export default function VoiceLayout({ children }) {
  return (
    <>
      <JsonLd data={pageSchemas(pages.voice)} />
      {children}
    </>
  );
}
