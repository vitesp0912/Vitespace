export default function Head() {
  const title = 'AI Calling Agent - 24/7 Voice Sales Automation | VITESPACE';
  const description =
    'AI calling agents for inbound and outbound sales workflows: answer instantly, qualify leads, book appointments, and sync CRM.';
  const url = 'https://vitespace.com/ai-calling-agent';

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
