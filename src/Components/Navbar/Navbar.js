import * as React from "react";
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
import DialogBox from "../DialogBox/DialogBox";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Tooltip } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import logo_dark from "../../assets/logo-dark.svg";
import { Link } from "react-scroll";
import { customer_support_api } from "../../utiles/constants";

const drawerWidth = 240;

function Navs() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
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
    {
      id: "free-trial",
      Name: <DialogBox isActive={isActive} />,
      offset: -450,
    },
    {
      id: "visit-tftus",
      Name: (
        <a
          href="https://www.tftus.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textTransform: "none",
            color: isActive ? "black" : "white",
            textDecoration: "none",
            textTransform: "capitalize",
          }}
        >
          Visit tftus.com
        </a>
      ),
      offset: -450,
    },
  ];
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    setIsActive(windowWidth <= 950);
  }, [windowWidth, isActive]);

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
        <img src={logo_dark} alt="logo_dark" style={{ width: "50px" }} />
        <span style={{ fontSize: "25px" }}>CloudifyTests</span>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                // primary={<Link to={item.link}>{item.Name}</Link>}
                primary={
                  item.id == "visit-tftus" ? (
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://www.tftus.com"
                    >
                      {item.Name}
                    </a>
                  ) : (
                    <Link
                      className="link-dr"
                      activeClass="active"
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={handleDrawerClose}
                    >
                      {item.Name}
                    </Link>
                  )
                }
                className="links"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={
              isActive
                ? { mr: 2, display: { sm: "block" } }
                : { mr: 2, display: { sm: "none" } }
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Box className="logo_container">
              <img src={logo} alt="logoc" /> <span>CloudifyTests</span>
            </Box>
          </Typography>
          <Box
            sx={
              isActive
                ? { display: { sm: "none" } }
                : { display: { sm: "block" } }
            }
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={
                  isActive
                    ? { fontSize: "10px", color: "white", display: "none" }
                    : { color: "#fff", textTransform: "capitalize" }
                }
              >
                {item.id == "visit-tftus" ? (
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.tftus.com"
                  >
                    {item.Name}
                  </a>
                ) : (
                  <Link
                    activeClass="active"
                    className="link-data"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {item.Name}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Tooltip
          style={{
            textAlign: "center",
            marginTop: "8px",
          }}
          title={<div>Contact Us</div>}
        >
          <Button className="support_icon">
            <a
              href={customer_support_api}
              target={"_blank"}
              style={{
                textTransform: "none",
                color: "grey",
                textDecoration: "none",
                display: "flex",
                zIndex: "2",
              }}
            >
              <SupportAgentIcon sx={{ position: "relative", left: "12px" }} />
            </a>
          </Button>
        </Tooltip>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navs;
