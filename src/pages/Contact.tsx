import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

// import socialMedia from "../data/socialMedia";
import { FaYoutube } from "react-icons/fa6";
import { useGetArtist } from "../hooks/useArtist";
import { mapMedia } from "../types/contact.data";

function Contact() {
  const { data: artistData, isLoading:artistLoading } = useGetArtist();
  if(artistLoading) return <div>...Loading</div>
  const socialMedia = mapMedia(
    artistData
  );

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={34} />,
      link: socialMedia.whatsapplink,
      color: "#25D366",
    },

    {
      name: "Instagram",
      icon: <FaInstagram size={34} />,
      link: socialMedia.instalink,
      color: "#E1306C",
    },

    {
      name: "Facebook",
      icon: <FaFacebook size={34} />,
      link: socialMedia.facebooklink,
      color: "#1877F2",
    },

    {
      name: "YouTube",
      icon: <FaYoutube size={34} />,
      link: socialMedia.Youtubelink,
      color: "#FF0000",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",

        px: {
          xs: 2,
          sm: 3,
          md: 10,
        },

        py: {
          xs: 8,
          md: 12,
        },
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
        }}
      >

        <Typography
          sx={{
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "#f97316",

            fontSize: {
              xs: "0.72rem",
              md: "0.85rem",
            },

            mb: 2,
          }}
        >
          Contact
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",

            fontSize: {
              xs: "2.2rem",
              sm: "3rem",
              md: "5rem",
            },
          }}
        >
          Let’s Connect
        </Typography>

        <Typography
          sx={{
            color: "#9ca3af",
            maxWidth: "720px",
            mx: "auto",
            mt: 3,
            lineHeight: 1.8,

            px: {
              xs: 1,
              sm: 0,
            },

            fontSize: {
              xs: "0.9rem",
              md: "1rem",
            },
          }}
        >
          Interested in custom sketches, paintings, or collaborations?
          Feel free to connect through social platforms or email.
        </Typography>

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

      {/* Main Grid */}
      <Grid
        container
        spacing={{
          xs: 3,
          md: 5,
        }}
      >

        {/* Left Side */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >

          <Card
            sx={{
              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: {
                xs: "22px",
                md: "30px",
              },

              p: {
                xs: 3,
                md: 5,
              },

              color: "#fff",
              height: "100%",
            }}
          >

            <Typography
              sx={{
                fontWeight: "bold",

                mb: 5,

                fontSize: {
                  xs: "1.7rem",
                  md: "2.4rem",
                },
              }}
            >
              Contact Information
            </Typography>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 4,
              }}
            >

              <Box
                sx={{
                  width: {
                    xs: 50,
                    md: 60,
                  },

                  height: {
                    xs: 50,
                    md: 60,
                  },

                  borderRadius: "50%",
                  backgroundColor: "#f97316",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  flexShrink: 0,
                  fontSize: "1.4rem",
                }}
              >
                <FaEnvelope />
              </Box>

              <Box>

                <Typography
                  sx={{
                    color: "#9ca3af",

                    fontSize: {
                      xs: "0.75rem",
                      md: "0.9rem",
                    },
                  }}
                >
                  Email
                </Typography>

                <Typography
                  component="a"
                  href={`mailto:${socialMedia.Email}`}

                  sx={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",

                    transition: "0.3s",

                    fontSize: {
                      xs: "0.88rem",
                      md: "1.1rem",
                    },

                    wordBreak: "break-word",

                    "&:hover": {
                      color: "#f97316",
                    },
                  }}
                >
                  {socialMedia.Email}
                </Typography>

              </Box>

            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 4,
              }}
            >

              <Box
                sx={{
                  width: {
                    xs: 50,
                    md: 60,
                  },

                  height: {
                    xs: 50,
                    md: 60,
                  },

                  borderRadius: "50%",
                  backgroundColor: "#f97316",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  flexShrink: 0,
                  fontSize: "1.4rem",
                }}
              >
                <FaPhoneAlt />
              </Box>

              <Box>

                <Typography
                  sx={{
                    color: "#9ca3af",

                    fontSize: {
                      xs: "0.75rem",
                      md: "0.9rem",
                    },
                  }}
                >
                  Phone
                </Typography>

                <Typography
                  component="a"
                  href={`tel:+${socialMedia.mobileNumber}`}

                  sx={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",

                    transition: "0.3s",

                    fontSize: {
                      xs: "0.88rem",
                      md: "1.1rem",
                    },

                    "&:hover": {
                      color: "#f97316",
                    },
                  }}
                >
                  +{socialMedia.mobileNumber}
                </Typography>

              </Box>

            </Box>

            {/* WhatsApp */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >

              <Box
                sx={{
                  width: {
                    xs: 50,
                    md: 60,
                  },

                  height: {
                    xs: 50,
                    md: 60,
                  },

                  borderRadius: "50%",
                  backgroundColor: "#25D366",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  flexShrink: 0,
                  fontSize: "1.4rem",
                }}
              >
                <FaWhatsapp />
              </Box>

              <Box>

                <Typography
                  sx={{
                    color: "#9ca3af",

                    fontSize: {
                      xs: "0.75rem",
                      md: "0.9rem",
                    },
                  }}
                >
                  WhatsApp
                </Typography>

                <Typography
                  component="a"
                  href={socialMedia.whatsapplink}
                  target="_blank"

                  sx={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",

                    transition: "0.3s",

                    fontSize: {
                      xs: "0.88rem",
                      md: "1.1rem",
                    },

                    "&:hover": {
                      color: "#25D366",
                    },
                  }}
                >
                  Quick Chat Support
                </Typography>

              </Box>

            </Box>

          </Card>

        </Grid>

        {/* Right Side */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >

          <Card
            sx={{
              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: {
                xs: "22px",
                md: "30px",
              },

              p: {
                xs: 3,
                md: 5,
              },

              color: "#fff",
              height: "100%",
            }}
          >

            <Typography
              sx={{
                fontWeight: "bold",

                mb: 5,

                fontSize: {
                  xs: "1.7rem",
                  md: "2.4rem",
                },
              }}
            >
              Social Platforms
            </Typography>

            <Grid
              container
              spacing={2}
            >

              {socialLinks.map((social, index) => (

                <Grid
                  key={index}

                  size={{
                    xs: 6,
                    sm: 6,
                  }}
                >

                  <Card
                    component="a"
                    href={social.link}
                    target="_blank"

                    sx={{
                      textDecoration: "none",
                      backgroundColor: "#181818",
                      borderRadius: "20px",
                      color: social.color,
                      p: {
                        xs: 2.5,
                        md: 4,
                      },

                      display: "flex",
                      flexDirection: "column",

                      alignItems: "center",
                      justifyContent: "center",

                      gap: 2,

                      transition: "0.4s",

                      cursor: "pointer",

                      "&:hover": {
                        backgroundColor: social.color,
                        color: "#fff",
                        transform: "translateY(-8px)",
                      },
                    }}
                  >

                    {social.icon}

                    <Typography
                      sx={{
                        fontWeight: "600",

                        fontSize: {
                          xs: "0.9rem",
                          md: "1rem",
                        },

                        transition: "0.3s",
                      }}
                    >
                      {social.name}
                    </Typography>

                  </Card>

                </Grid>

              ))}

            </Grid>

          </Card>

        </Grid>

      </Grid>

    </Box>
  );
}

export default Contact;