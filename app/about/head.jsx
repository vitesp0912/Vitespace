export default function Head() {
  const title = 'About VITESPACE - We Engineer Growth Systems';
  const description =
    'VITESPACE builds AI systems, digital infrastructure, and growth frameworks for execution-focused businesses.';
  const url = 'https://vitespace.com/about';

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
