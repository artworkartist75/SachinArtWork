import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  jsonLd?: object;
}

const SEO = ({
  title,
  description,
  keywords = "",
  image = "https://res.cloudinary.com/dppkip6ik/image/upload/v1784487284/ArtistImages/zef7njsrsggz5afz0zuf.jpg", // Change to your logo/banner
  url = "https://sachinartwork.vercel.app",
  jsonLd,
}: SEOProps) => {
  return (
    // <Helmet>
    //   <title>{title}</title>

    //   <meta name="description" content={description} />

    //   {keywords && (
    //     <meta
    //       name="keywords"
    //       content={keywords}
    //     />
    //   )}

    //   <meta name="robots" content="index, follow" />

    //   <link rel="canonical" href={url} />

    //   {/* Open Graph */}
    //   <meta property="og:type" content="website" />
    //   <meta property="og:title" content={title} />
    //   <meta
    //     property="og:description"
    //     content={description}
    //   />
    //   <meta property="og:image" content={image} />
    //   <meta property="og:url" content={url} />

    //   {/* Twitter */}
    //   <meta
    //     name="twitter:card"
    //     content="summary_large_image"
    //   />
    //   <meta name="twitter:title" content={title} />
    //   <meta
    //     name="twitter:description"
    //     content={description}
    //   />
    //   <meta name="twitter:image" content={image} />

    //   {/* JSON-LD */}
    //   {jsonLd && (
    //     <script type="application/ld+json">
    //       {JSON.stringify(jsonLd)}
    //     </script>
    //   )}
    // </Helmet>

    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sachin Artwork" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;