import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArtService from "../data/artWorks";
import { useGetArtwork } from "../hooks/useArtwork";
import { mapFeaturedArtworks } from "../types/featured.data";
import SEO from "../services/SEO";
import { websiteJsonLdWorkPage } from "../services/JSON-LD";
import Loader from "../layouts/Loader";
import { useTheme as useAppTheme } from "../ThemeContext";

function ArtServices() {
  const icons = ["✏️", "🎨", "🖥️", "💡"];
  const { data: artworkData, isLoading:artLoading } = useGetArtwork();
  const { theme } = useAppTheme();

  const isDark = theme === "dark";
  
  if(artLoading) return <Loader/>

  const artwork = mapFeaturedArtworks(artworkData);

  return (
    <>
      <SEO
        title="Artworks | Sachin Artwork"
        description="Browse original paintings, portraits, landscape art and custom artwork by Sachin."
        keywords="Sachin artist, sachinartist, artist,Sachin Artwork, Artworks, Paintings, Canvas Art, Portrait Sketch"
        url="https://sachinartwork.vercel.app/work"
        jsonLd={websiteJsonLdWorkPage}
      />
      <Box
        sx={{
          pt: {
            xs: 8,
            md: 14,
          },

          pb: 6,

          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000",
        }}
      >

        {/* Works */}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 6,
              md: 10,
            },
            px: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Art Works
          </Typography>
          <Box
            sx={{
              width: "80px",
              height: "4px",
              backgroundColor: "#f97316",
              mx: "auto",
              mt: 3,
              borderRadius: "20px",
            }}
          />
        </Box>

        {/* Art */}
        <Grid
          container
          spacing={{
            xs: 2,
            md: 4,
          }}
          sx={{
            px: {
            xs: 1,
            sm: 2,
            md: 5,
          },
          }}
        >
          {artwork.map((work) => (
            <Grid
              key={work.id}
              size={{
                xs: 6,
                sm: 4,
                md: 4,
              }}
            >
              <Card
                sx={{
                  background: isDark ? "linear-gradient(145deg, #111, #1a1a1a)" : "linear-gradient(145deg, #fff, #f0f0f0)",
                  border: "1px solid #262626",
                  borderRadius: {
                    xs: "18px",
                    md: "28px",
                  },
                  color: isDark ? "#fff" : "#111827",
                  height: "100%",
                  transition: "0.4s",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: isDark ? "1px solid #262626" : "1px solid #e5e7eb",
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: {
                      xs: 1.5,
                      sm: 2.5,
                      md: 3,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={work.image}
                    alt={work.title}
                    sx={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      mb: 2,
                    }}
                  />
                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2rem",
                        md: "1.6rem",
                      },
                      mb: 1.5,
                    }}
                  >
                    {work.title}
                  </Typography>
                  {/* Description */}
                  <Typography
                    sx={{
                      color: isDark ? "#9ca3af" : "#6b7280",
                      lineHeight: {
                        xs: 1.5,
                        md: 1.8,
                      },
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.88rem",
                        md: "1rem",
                      },
                      display: "-webkit-box",
                      WebkitLineClamp: {
                        xs: 4,
                        md: 5,
                      },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      // minHeight: {
                      //   xs: "70px",
                      //   md: "120px",
                      // },
                    }}
                  >
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>      

        {/* Heading */}
        <Box
          sx={{
            textAlign: "center",

            mb: {
              xs: 6,
              md: 10,
            },

            mt: 8,
            px: 2,
          }}
        >

          <Typography
            sx={{
              fontWeight: "bold",

              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Art Types
          </Typography>

          <Box
            sx={{
              width: "80px",
              height: "4px",

              backgroundColor: isDark ? "#f97316" : "#f97316",

              mx: "auto",
              mt: 3,

              borderRadius: "20px",
            }}
          />

        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={{
            xs: 2,
            md: 4,
          }}
          sx={{
            px: {
            xs: 2,
            sm: 3,
            md: 6,
          },
          }}  
        >

          {ArtService.map((service, index) => (

            <Grid
              key={index}

              size={{
                xs: 6,
                sm: 6,
                md: 3,
              }}
            >

              <Card
                sx={{
                  background: isDark
                    ? "linear-gradient(145deg, #111, #1a1a1a)"
                    : "linear-gradient(145deg, #fff, #f3f4f6)",

                  border: isDark ? "1px solid #262626" : "1px solid #e5e7eb",

                  borderRadius: {
                    xs: "18px",
                    md: "28px",
                  },

                  color: isDark ? "#fff" : "#111827",

                  height: "100%",

                  transition: "0.4s",

                  cursor: "pointer",

                  "&:hover": {
                    borderColor: isDark ? "#f97316" : "#fb923c",
                    transform: "translateY(-8px)",
                  },
                }}
              >

                <CardContent
                  sx={{
                    p: {
                      xs: 2,
                      sm: 2.5,
                      md: 4,
                    },
                  }}
                >

                  {/* Icon */}
                  <Box
                    sx={{
                      width: {
                        xs: 46,
                        md: 60,
                      },

                      height: {
                        xs: 46,
                        md: 60,
                      },

                      borderRadius: "50%",

                      backgroundColor: "#f97316",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      fontSize: {
                        xs: "1.3rem",
                        md: "2rem",
                      },

                      mb: {
                        xs: 2,
                        md: 3,
                      },
                    }}
                  >
                    {icons[index]}
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: "bold",

                      fontSize: {
                        xs: "0.95rem",
                        sm: "1.2rem",
                        md: "1.6rem",
                      },

                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: isDark ? "#9ca3af" : "#6b7280",

                      lineHeight: {
                        xs: 1.5,
                        md: 1.8,
                      },

                      fontSize: {
                        xs: "0.72rem",
                        sm: "0.88rem",
                        md: "1rem",
                      },

                      display: "-webkit-box",

                      WebkitLineClamp: {
                        xs: 4,
                        md: 5,
                      },

                      WebkitBoxOrient: "vertical",

                      overflow: "hidden",

                      minHeight: {
                        xs: "70px",
                        md: "120px",
                      },
                    }}
                  >
                    {service.description}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Box>
    </>
  );
}

export default ArtServices;