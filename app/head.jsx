export default function Head() {
  const title = 'VITESPACE - AI Infrastructure & Growth Systems';
  const description =
    'AI voice agents, chatbots, automation systems, digital infrastructure, and growth execution for scalable businesses.';
  const url = 'https://vitespace.com/';

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
