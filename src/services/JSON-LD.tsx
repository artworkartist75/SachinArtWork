export const websiteJsonLdHomePage = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sachinartwork.vercel.app/#website",
      "url": "https://sachinartwork.vercel.app",
      "name": "Sachin Artwork",
      "alternateName": [
        "sachin artist","sachinartist", "Sachin artist", "Sachinartist",
        "artist sachin","artistsachin", "Artist Sachin", "ArtistSachin",
        "Sachin",
        "Sachin Art",
        "Sachin Artwork",
        "Sachin Paintings",
        "Sachin Artist"
      ],
      "description":
        "Official portfolio of Sachin featuring original paintings, pencil sketches, portraits and digital artwork.",
      "inLanguage": "en-IN",
      "keywords": [
        "sachin artist","sachinartist", "Sachin artist", "Sachinartist",
        "artist sachin","artistsachin", "Artist Sachin", "ArtistSachin",
        "Sachin",
        "Sachin Artwork",
        "Sachin Art",
        "Artist Sachin",
        "Sachin Paintings",
        "Original Paintings",
        "Portrait Sketch",
        "Pencil Sketch",
        "Canvas Painting",
        "Digital Art",
        "Modern Art",
        "Custom Portrait",
        "Indian Artist",
        "Art Gallery"
      ],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sachinartwork.vercel.app/work?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Person",
      "@id": "https://sachinartwork.vercel.app/#person",
      "name": "Sachin",
      "url": "https://sachinartwork.vercel.app",
      "jobTitle": "Artist",
      "description":
        "Professional artist specializing in paintings, portraits, pencil sketches and digital artwork.",
      "image": "https://sachinartwork.vercel.app/images/artist.jpg"
    }
  ]
};

export const websiteJsonLdAboutPage = (artistInfo:any) =>  ({
  "@context": "https://schema.org",
  "@type": "Person",

  "@id": "https://sachinartwork.vercel.app/#artist",

  name: "Sachin",

  alternateName: [
    "sachin artist","sachinartist", "Sachin artist", "Sachinartist",
    "artist sachin","artistsachin", "Artist Sachin", "ArtistSachin",
    "Sachin Artwork",
    "Sachin Artist",
    "Sachin Art",
    "Sachin Paintings"
  ],

  url: "https://sachinartwork.vercel.app/",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sachinartwork.vercel.app/about"
  },

  image: artistInfo.picture,

  description:
    "Professional artist creating paintings, portraits, pencil sketches and digital artwork.",

  jobTitle: "Artist",

  knowsAbout: [
    "Painting",
    "Portrait Drawing",
    "Pencil Sketch",
    "Canvas Painting",
    "Digital Art",
    "Modern Art",
    "Portrait Painting"
  ],

  sameAs: [
    artistInfo.instalink,
    artistInfo.facebooklink,
    artistInfo.linkedinlink,
    artistInfo.Youtubelink
  ].filter(Boolean)
})

export const websiteJsonLdWorkPage = {
  "@context": "https://schema.org",

  "@type": "CollectionPage",

  name: "Artwork Gallery",

  url: "https://sachinartwork.vercel.app/work",

  description:
    "Browse original paintings, portraits, canvas paintings, sketches and digital artworks.",

  keywords: [
    "Sachin Artwork",
    "Paintings",
    "Portrait",
    "Sketch",
    "Canvas Art",
    "Digital Art",
    "Gallery"
  ],

  creator: {
    "@type": "Person",
    name: "Sachin"
  }
}

/*
export const websiteJsonLdArtworkPage = {
  "@context": "https://schema.org",

  "@type": "VisualArtwork",

  name: artwork.title,

  image: artwork.images[0]?.url,

  description: artwork.description,

  url: `https://sachinartwork.vercel.app/work/${artwork.slug}`,

  creator: {
    "@type": "Person",
    name: "Sachin"
  },

  artMedium: artwork.medium,

  artworkSurface: artwork.surface,

  genre: artwork.category,

  keywords: artwork.tags,

  dateCreated: artwork.createdAt
}
*/