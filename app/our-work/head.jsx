export default function Head() {
  const title = 'Our Work - Selected Projects | VITESPACE';
  const description =
    'Explore selected VITESPACE projects across real estate, e-commerce, travel, and portfolio websites.';
  const url = 'https://vitespace.com/our-work';

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
