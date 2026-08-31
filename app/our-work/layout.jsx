import { createMetadata, pages } from '@/lib/seo';

export const metadata = createMetadata(pages.work);

export default function OurWorkLayout({ children }) {
  return children;
}
