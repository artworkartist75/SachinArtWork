export const mapFeaturedArtwork = (artwork: any) => {
  return {
    id: artwork._id,
    title: artwork.title,
    slug: artwork.slug,
    description: artwork.description,
    image: artwork.artworkImages?.[0]?.url || "",
    images: artwork.artworkImages || [],
    category: artwork.category,
    medium: artwork.medium,
    tags: artwork.tags || [],
    yearCreated: artwork.yearCreated,
    price: artwork.price,
    isForSale: artwork.isForSale,
    isFeatured: artwork.isFeatured,
    status: artwork.status,
    likes: artwork.likes,
    views: artwork.views,
    artistId: artwork.artist,
  };
};

export const mapFeaturedArtworks = (artworks: any[] = []) => {
  return artworks.map(mapFeaturedArtwork);
};