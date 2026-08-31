/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/solutions/digital-infrastructure',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/solutions/products',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/solutions/growth-marketing',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/solutions/ai-automation-systems',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/solutions/ai-chatbots',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/solutions/ai-voice-agents',
        destination: '/solutions',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
