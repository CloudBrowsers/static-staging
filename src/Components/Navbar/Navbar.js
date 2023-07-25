import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import logo_dark from "../../assets/logo-dark.svg";
import "./navbar.css";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 240;
const navItems = [
  {
    id: "home",
    Name: "Home",
    link: "/",
    offset: 0,
  },
  {
    id: "about",
    Name: "About Us",
    link: "/about",
    offset: -70,
  },
  {
    id: "offerings",
    Name: "Offerings",
    link: "/offerings",
    offset: -450,
  },
  {
    id: "features",
    Name: "Benefits",
    link: "/features",
    offset: -450,
  },
  {
    id: "usage",
    Name: "Usage",
    link: "/usage",
    offset: -450,
  },
  {
    id: "contact",
    Name: "Contact Us",
    link: "/contact",
    offset: -450,
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        style={{
          display: "flex",
          justifyContant: "center",
          alignItems: "center",
          gap: "10px",
          padding: "1rem",
        }}
      >
        <img src={logo_dark} alt="logo_dark" style={{ width: "50px" }} />{" "}
        <span>CloudifyTests</span>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                // primary={<Link to={item.link}>{item.Name}</Link>}
                primary={
                  <Link
                    className="link-dr"
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={item.offset}
                    onClick={handleDrawerClose}
                  >
                    {item.Name}
                  </Link>
                }
                className="links"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        onClick={handleDrawerToggle}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerClose}
          sx={{ mr: 0, display: { sm: "none" } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="appbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box className="logo_container">
              <img src={logo} alt="logoc" /> <span>CloudifyTests</span>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button className="links">
                <Link
                  activeClass="active"
                  // className="link-dr"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {item.Name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
