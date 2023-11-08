import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HumbergerIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { AddActionGA } from "../Services/GA";

const pages = [
  { name: "Home", tag: "/" },
  { name: "Video", tag: "/video" },
  { name: "Product", tag: "/product" },
  { name: "Costume", tag: "/costume" },
  { name: "About", tag: "/about" },
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
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = React.useState("/");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  React.useEffect(() => {
    setMenuActive(window.location.pathname);
  }, [window.location.pathname]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const redirectPageSearch = (page, searchText) => {
    AddActionGA("search", searchText, page);
    navigate(page);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      redirectPageSearch("/video?search=" + e.target.value, e.target.value);
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {pages.map((page, index) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton onClick={() => props.redirectPage(page.tag)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

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
            sx={{
              width: { xs: "100px", md: "180px" },
            }}
            width={"180px"}
            height={"80px"}
            src={`${process.env.REACT_APP_WEB_URL}/image/logo-vestia-zeta.png`}
          />

          {/* Untuk Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              width: "100%",
            }}>
            <React.Fragment key={"left"}>
              <Button
                sx={{ color: "black" }}
                onClick={toggleDrawer("left", true)}>
                <HumbergerIcon />
              </Button>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}>
                {list()}
              </Drawer>
            </React.Fragment>
          </Box>
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
              display: { xs: "none", md: "flex" },
            }}>
            <Search
              sx={{ backgroundColor: "#2d4b70", borderRadius: 10 }}
              onKeyDown={onKeyDown}>
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
