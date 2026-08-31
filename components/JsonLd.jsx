export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((schema, i) => (
        <script
          key={schema['@id'] || schema['@type'] || i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
