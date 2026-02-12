export default function Head() {
  const title = 'AI Automation Systems - Workflow Engineering | VITESPACE';
  const description =
    'Replace manual processes with AI automation modules and custom workflow engineering across CRM, reporting, and operations.';
  const url = 'https://vitespace.com/solutions/ai-automation-systems';

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
