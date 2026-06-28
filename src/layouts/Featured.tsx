import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import artworks from "../data/FeaturedWorks";

function FeaturedWorks() {

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const slider = sliderRef.current;

    if (!slider) return;

    const cardWidth =
      window.innerWidth < 600 ? 280 : 420;

    let scrollAmount = 0;

    const autoSlide = setInterval(() => {

      if (slider) {

        scrollAmount += cardWidth;

        if (
          scrollAmount >=
          slider.scrollWidth - slider.clientWidth
        ) {
          scrollAmount = 0;
        }

        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }

    }, 3000);

    return () => clearInterval(autoSlide);

  }, []);

  return (
    <Box
      sx={{
        pt: {
          xs: 8,
          md: 14,
        },

        pb: 6,

        backgroundColor: "#000",
        color: "#fff",

        overflow: "hidden",
      }}
    >

      {/* Heading */}
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
          Featured Works
        </Typography>

        <Typography
          sx={{
            color: "#9ca3af",

            maxWidth: "700px",

            mx: "auto",

            mt: 3,

            lineHeight: 1.8,

            fontSize: {
              xs: "0.9rem",
              md: "1rem",
            },

            px: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          A collection of detailed sketches, paintings,
          and digital artworks crafted with creativity.
        </Typography>

        {/* Line */}
        <Box
          sx={{
            width: "80px",
            height: "4px",

            backgroundColor: "#f97316",

            mx: "auto",
            mt: 4,

            borderRadius: "20px",
          }}
        />
      </Box>

      {/* Slider */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",

          gap: {
            xs: 2,
            md: 3,
          },

          overflowX: "auto",

          scrollBehavior: "smooth",

          px: {
            xs: 2,
            md: 4,
          },

          scrollSnapType: "x mandatory",

          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",
        }}
      >

        {[...artworks, ...artworks].map((art, index) => (

          <Card
            key={index}

            sx={{
              minWidth: {
                xs: "260px",
                sm: "320px",
                md: "380px",
              },

              maxWidth: {
                xs: "260px",
                sm: "320px",
                md: "380px",
              },

              scrollSnapAlign: "start",

              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: {
                xs: "20px",
                md: "28px",
              },

              overflow: "hidden",

              color: "#fff",

              flexShrink: 0,

              transition: "0.4s",

              cursor: "pointer",

              "&:hover": {
                borderColor: "#f97316",
                transform: "translateY(-8px)",
              },
            }}
          >

            {/* Image */}
            <Box
              sx={{
                overflow: "hidden",
              }}
            >

              <Box
                component="img"
                src={art.image}
                alt={art.title}

                sx={{
                  width: "100%",

                  height: {
                    xs: "220px",
                    sm: "280px",
                    md: "340px",
                  },

                  objectFit: "cover",

                  transition: "0.5s",

                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              />

            </Box>

            {/* Content */}
            <CardContent
              sx={{
                p: {
                  xs: 2.2,
                  sm: 3,
                  md: 4,
                },
              }}
            >

              <Typography
                sx={{
                  fontWeight: "bold",

                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.4rem",
                    md: "1.8rem",
                  },
                }}
              >
                {art.title}
              </Typography>

              <Typography
                sx={{
                  color: "#f97316",

                  mt: 1.5,

                  fontSize: {
                    xs: "0.82rem",
                    md: "1rem",
                  },
                }}
              >
                {art.type}
              </Typography>

            </CardContent>

          </Card>

        ))}

      </Box>
    </Box>
  );
}

export default FeaturedWorks;