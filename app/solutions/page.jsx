import SolutionsView from '@/components/solutions/SolutionsPageView';
import JsonLd from '@/components/JsonLd';
import { pageSchemas, pages } from '@/lib/seo';

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={pageSchemas(pages.solutions)} />
      <SolutionsView />
    </>
  );
}
