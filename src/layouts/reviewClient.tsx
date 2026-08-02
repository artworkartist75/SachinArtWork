import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

import topReview from "../data/topReview";
import { useTheme as useAppTheme } from "../ThemeContext";

function ClientReviews() {

  const sliderRef = useRef<HTMLDivElement>(null);
  const { theme } = useAppTheme();
  const isDark = theme === "dark";

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
          md: 12,
        },

        backgroundColor: isDark ? "#000" : "#f8fafc",
        color: isDark ? "#fff" : "#111827",
        overflow: "hidden",
      }}
    >

      {/* Heading */}
      <Box
        sx={{
          textAlign: "center",
          mb: {
            xs: 6,
            md: 8,
          },

          px: 2,
        }}
      >

        <Typography
          sx={{
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "#f97316",

            fontSize: {
              xs: "0.7rem",
              md: "0.8rem",
            },

            mb: 2,
          }}
        >
          Testimonials
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",

            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3.5rem",
            },
          }}
        >
          Client Reviews
        </Typography>

        <Typography
          sx={{
            color: isDark ? "#9ca3af" : "#6b7280",

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
          Feedback and experiences shared by clients who trusted
          my creativity and artwork.
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
            sm: 3,
            md: 6,
          },

          scrollSnapType: "x mandatory",

          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",
        }}
      >

        {[...topReview, ...topReview].map((review, index) => (

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

              background: isDark
                ? "linear-gradient(145deg, #111, #1a1a1a)"
                : "linear-gradient(145deg, #fff, #f3f4f6)",

              border: isDark ? "1px solid #262626" : "1px solid #e5e7eb",

              borderRadius: {
                xs: "20px",
                md: "28px",
              },

              color: isDark ? "#fff" : "#111827",

              flexShrink: 0,

              transition: "0.4s",

              "&:hover": {
                borderColor: isDark ? "#f97316" : "#fb923c",
                transform: "translateY(-8px)",
              },
            }}
          >

            <CardContent
              sx={{
                p: {
                  xs: 2.2,
                  sm: 3,
                  md: 4,
                },
              }}
            >

              {/* Rating */}
              <Rating
                value={review.rating}
                readOnly
                sx={{
                  mb: 3,
                  color: "#f97316",
                }}
              />

              {/* Review */}
              <Typography
                sx={{
                  color: isDark ? "#d1d5db" : "#4b5563",

                  lineHeight: {
                    xs: 1.7,
                    md: 1.9,
                  },

                  fontSize: {
                    xs: "0.82rem",
                    sm: "0.9rem",
                    md: "1rem",
                  },

                  display: "-webkit-box",

                  WebkitLineClamp: {
                    xs: 4,
                    sm: 5,
                    md: 6,
                  },

                  WebkitBoxOrient: "vertical",

                  overflow: "hidden",
                  textOverflow: "ellipsis",

                  wordBreak: "break-word",

                  minHeight: {
                    xs: "90px",
                    sm: "110px",
                    md: "140px",
                  },
                }}
              >
                “{review.review}”
              </Typography>

              {/* User */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: 2,

                  mt: 4,
                }}
              >

                <Avatar
                  sx={{
                    width: {
                      xs: 48,
                      md: 56,
                    },

                    height: {
                      xs: 48,
                      md: 56,
                    },

                    backgroundColor: "#f97316",

                    fontWeight: "bold",

                    fontSize: {
                      xs: "1rem",
                      md: "1.2rem",
                    },
                  }}
                >
                  {review.name.charAt(0)}
                </Avatar>

                <Box>

                  <Typography
                    sx={{
                      fontWeight: "bold",

                      fontSize: {
                        xs: "0.95rem",
                        md: "1.1rem",
                      },
                    }}
                  >
                    {review.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#f97316",

                      fontSize: {
                        xs: "0.75rem",
                        md: "0.9rem",
                      },

                      mt: 0.5,
                    }}
                  >
                    {review.artType} Client
                  </Typography>

                </Box>

              </Box>

            </CardContent>
          </Card>

        ))}

      </Box>
    </Box>
  );
}

export default ClientReviews;