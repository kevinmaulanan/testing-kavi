import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import ReactGA from "react-ga4";

const pages = [
  { name: "Home", tag: "/" },
  { name: "Video", tag: "/video" },
  { name: "Product", tag: "/product" },
  { name: "Costume", tag: "/costume" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100PX",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        // width: "20ch",
      },
    },
  },
}));

function Layout(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [menuActive, setMenuActive] = React.useState("/");

  React.useEffect(() => {
    setMenuActive(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 70 }}>
          {/* <Typography
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}>
            ZETA
          </Typography> */}

          <Box
            component={"img"}
            alt={"Logo Zeta"}
            width={"180px"}
            height={"80px"}
            src={`${process.env.REACT_APP_WEB_URL}/image/logo-vestia-zeta.png`}
          />

          {/* Untuk Mobile
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages &&
                pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => props.redirectPage(page.tag)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}>
            LOGO
          </Typography> */}

          {/* Untuk Website */}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundColor: "#ffffffd1",
              color: "black",
              height: 40,
              justifyContent: "center",
              borderRadius: 50,
              border: "2px solid #fff",
              width: "100%",
            }}>
            {pages &&
              pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => props.redirectPage(page.tag)}
                  sx={{
                    // my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: page.tag === menuActive ? "bold" : "500",
                    fontSize: 20,
                    fontFamily: "monospace",
                    marginLeft: 1,
                    marginRight: 1,
                    transition: "0.2s",
                    "&:hover": {
                      opacity: ".5",
                    },
                  }}>
                  {page.name}
                </Button>
              ))}
          </Box>

          <Box
            sx={{
              backgroundColor: "#2d4b70",
              borderRadius: 10,
              width: "200px",
              border: "2px solid #ffffffd1",
            }}>
            <Search sx={{ backgroundColor: "#2d4b70", borderRadius: 10 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Layout;
