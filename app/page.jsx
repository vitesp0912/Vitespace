import HomeView from '@/components/home/HomeView';
import JsonLd from '@/components/JsonLd';
import { faqSchema, pageSchemas, pages } from '@/lib/seo';

export default function Home() {
  return (
    <>
      <JsonLd data={[...pageSchemas(pages.home), faqSchema()]} />
      <HomeView />
    </>
  );
}
