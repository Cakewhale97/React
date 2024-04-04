import Button from "@mui/material/Button";

export default function Btn() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#f9dc5c",
        color: "white",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
      }}
    >
      Get Started
    </Button>
  );
}
