export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Piracha",
    url: "https://ahmadpiracha.vercel.app",
    image: "https://ahmadpiracha.vercel.app/og-image.png",
    sameAs: [
      "https://github.com/AhmadPiracha",
      "https://www.linkedin.com/in/ahmad-waseem-piracha/",
    ],
    jobTitle: "Frontend & Product Engineer",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Frontend Development",
      "SaaS Development",
      "Chrome Extensions",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ahmad Piracha",
    url: "https://ahmadpiracha.vercel.app",
    description:
      "Frontend/Product Engineer building SaaS tools, developer utilities, Chrome extensions, and polished web apps.",
    author: {
      "@type": "Person",
      name: "Ahmad Piracha",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
