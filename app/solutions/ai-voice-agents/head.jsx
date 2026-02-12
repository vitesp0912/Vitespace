export default function Head() {
  const title = 'AI Voice Agents - Revenue Execution Systems | VITESPACE';
  const description =
    'AI voice agents for inbound and outbound workflows: lead qualification, follow-ups, appointment booking, and CRM synchronization.';
  const url = 'https://vitespace.com/solutions/ai-voice-agents';

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
