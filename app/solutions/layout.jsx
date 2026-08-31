import { createMetadata, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.solutions);

export default function SolutionsLayout({ children }) {
  return children;
}
