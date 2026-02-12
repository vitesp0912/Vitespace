export default function Head() {
  const title = 'Solutions - Modular AI & Growth Infrastructure | VITESPACE';
  const description =
    'Explore categorized solutions: AI Systems, Digital Infrastructure, and Growth & Brand Marketing.';
  const url = 'https://vitespace.com/solutions';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </>
  );
}
