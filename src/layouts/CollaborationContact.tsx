import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import socialMedia from "../data/socialMedia";

function CollaborationContact() {

  return (
    <Box
      sx={{
        pt: {
          xs: 8,
          md: 14,
        },

        pb: 10,

        backgroundColor: "#000",
        color: "#fff",
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
            textTransform: "uppercase",
            letterSpacing: "4px",

            color: "#f97316",

            fontSize: {
              xs: "0.75rem",
              md: "0.85rem",
            },

            mb: 2,
          }}
        >
          Collaboration
        </Typography>

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
          Let’s Work Together
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
          Open for collaborations, commissioned artwork,
          brand partnerships, and creative projects.
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

      {/* Cards */}
      <Grid
        container
        spacing={{
          xs: 2,
          md: 4,
        }}
      >

        {/* Email */}
        <Grid
          size={{
            xs: 6,
            md: 3,
          }}
        >

          <Card
            component="a"
            href={`mailto:${socialMedia.Email}`}

            sx={{
              textDecoration: "none",

              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: "24px",

              color: "#fff",

              p: {
                xs: 2,
                md: 4,
              },

              textAlign: "center",

              transition: "0.4s",

              "&:hover": {
                borderColor: "#f97316",
                transform: "translateY(-8px)",
              },
            }}
          >

            <FaEnvelope size={40} color="#f97316" />

            <Typography
              sx={{
                mt: 2,

                fontWeight: "bold",

                fontSize: {
                  xs: "1rem",
                  md: "1.4rem",
                },
              }}
            >
              Email
            </Typography>

            <Typography
              sx={{
                color: "#9ca3af",

                mt: 1,

                fontSize: {
                  xs: "0.7rem",
                  md: "0.95rem",
                },

                wordBreak: "break-word",
              }}
            >
              {socialMedia.Email}
            </Typography>

          </Card>

        </Grid>

        {/* WhatsApp */}
        <Grid
          size={{
            xs: 6,
            md: 3,
          }}
        >

          <Card
            component="a"
            href={socialMedia.whatsapplink}
            target="_blank"

            sx={{
              textDecoration: "none",

              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: "24px",

              color: "#fff",

              p: {
                xs: 2,
                md: 4,
              },

              textAlign: "center",

              transition: "0.4s",

              "&:hover": {
                borderColor: "#25D366",
                transform: "translateY(-8px)",
              },
            }}
          >

            <FaWhatsapp size={40} color="#25D366" />

            <Typography
              sx={{
                mt: 2,

                fontWeight: "bold",

                fontSize: {
                  xs: "1rem",
                  md: "1.4rem",
                },
              }}
            >
              WhatsApp
            </Typography>

            <Typography
              sx={{
                color: "#9ca3af",

                mt: 1,

                fontSize: {
                  xs: "0.7rem",
                  md: "0.95rem",
                },
              }}
            >
              Quick Chat Support
            </Typography>

          </Card>

        </Grid>

        {/* Instagram */}
        <Grid
          size={{
            xs: 6,
            md: 3,
          }}
        >

          <Card
            component="a"
            href={socialMedia.instalink}
            target="_blank"

            sx={{
              textDecoration: "none",

              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: "24px",

              color: "#fff",

              p: {
                xs: 2,
                md: 4,
              },

              textAlign: "center",

              transition: "0.4s",

              "&:hover": {
                borderColor: "#E1306C",
                transform: "translateY(-8px)",
              },
            }}
          >

            <FaInstagram size={40} color="#E1306C" />

            <Typography
              sx={{
                mt: 2,

                fontWeight: "bold",

                fontSize: {
                  xs: "1rem",
                  md: "1.4rem",
                },
              }}
            >
              Instagram
            </Typography>

            <Typography
              sx={{
                color: "#9ca3af",

                mt: 1,

                fontSize: {
                  xs: "0.7rem",
                  md: "0.95rem",
                },

                wordBreak: "break-word",
              }}
            >
              @{socialMedia.InstaUserName}
            </Typography>

          </Card>

        </Grid>

        {/* LinkedIn */}
        <Grid
          size={{
            xs: 6,
            md: 3,
          }}
        >

          <Card
            component="a"
            href={socialMedia.linkedinlink}
            target="_blank"

            sx={{
              textDecoration: "none",

              background:
                "linear-gradient(145deg, #111, #1a1a1a)",

              border: "1px solid #262626",

              borderRadius: "24px",

              color: "#fff",

              p: {
                xs: 2,
                md: 4,
              },

              textAlign: "center",

              transition: "0.4s",

              "&:hover": {
                borderColor: "#0A66C2",
                transform: "translateY(-8px)",
              },
            }}
          >

            <FaLinkedin size={40} color="#0A66C2" />

            <Typography
              sx={{
                mt: 2,

                fontWeight: "bold",

                fontSize: {
                  xs: "1rem",
                  md: "1.4rem",
                },
              }}
            >
              LinkedIn
            </Typography>

            <Typography
              sx={{
                color: "#9ca3af",

                mt: 1,

                fontSize: {
                  xs: "0.7rem",
                  md: "0.95rem",
                },
              }}
            >
              Professional Network
            </Typography>

          </Card>

        </Grid>

      </Grid>

    </Box>
  );
}

export default CollaborationContact;