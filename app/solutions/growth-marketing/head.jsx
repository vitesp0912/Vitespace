export default function Head() {
  const title = 'Growth & Brand Marketing - Strategic Execution | VITESPACE';
  const description =
    'Strategic growth execution across performance marketing and brand amplification channels, online and offline.';
  const url = 'https://vitespace.com/solutions/growth-marketing';

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
