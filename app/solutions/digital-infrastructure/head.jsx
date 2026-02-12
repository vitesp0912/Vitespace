export default function Head() {
  const title = 'Digital Infrastructure - Conversion-Focused Platforms | VITESPACE';
  const description =
    'High-performance digital infrastructure for growth: conversion websites, landing systems, SaaS platforms, and analytics-ready architecture.';
  const url = 'https://vitespace.com/solutions/digital-infrastructure';

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
