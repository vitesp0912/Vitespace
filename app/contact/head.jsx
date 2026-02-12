export default function Head() {
  const title = 'Contact - Schedule Strategy Consultation | VITESPACE';
  const description =
    'Schedule a strategy consultation with VITESPACE. Share your business context and growth challenges to build a scalable system.';
  const url = 'https://vitespace.com/contact';

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
