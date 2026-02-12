export default function Head() {
  const title = 'AI Chatbots - Conversational Systems at Scale | VITESPACE';
  const description =
    'Structured chatbot systems for website, WhatsApp, Instagram, and Messenger with lead qualification and support automation.';
  const url = 'https://vitespace.com/solutions/ai-chatbots';

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
