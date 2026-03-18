import Script from "next/script";
import { ConverterPage } from "@/components/converter-page";
import { APP_DESCRIPTION, APP_NAME, APP_TAGLINE } from "@/constants/branding";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${APP_NAME} - ${APP_TAGLINE}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: APP_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Script
        id="convertly-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ConverterPage />
    </>
  );
}
