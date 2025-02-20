import React, {useEffect, useRef, useState} from "react";
import {
    Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, useMediaQuery, useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import gsap from "gsap";
import DropdownButton from "./DropdownButton.jsx";

const navItems = [{label: "Überblick", path: "/uberblick"}, {
    label: "Literatur",
    path: "/literatur",
    subItems: [{label: "Epochen", path: "/literatur/epochen"}, {
        label: "Autoren",
        path: "/literatur/autoren"
    }, {label: "Werke", path: "/literatur/werke"},],
}, {label: "Geschichte", path: "/geschichte"}, {
    label: "Rolle der Frau",
    path: "/rolle-der-frau"
}, {label: "Kunst & Musik", path: "/kunst-musik"}, {
    label: "Der Romantiker",
    path: "/der-romantiker"
}, // …other nav items
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        gsap.from(navRef.current, {
            duration: 1, y: -50, opacity: 0, ease: "power2.out",
        });
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const backgroundColor = theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.95)";

    const drawer = (<Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
            <List>
                {navItems.map((item, idx) => (<ListItem key={idx} component={Link} to={item.path}>
                        <ListItemText primary={item.label}/>
                    </ListItem>))}
            </List>
        </Box>);

    return (<>
        <Box
            ref={navRef}
            sx={{
                width: "100%",
                position: "relative",
                top: 45,
                left: 0,
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
                //backgroundColor: "rgba(255, 255, 255, 0.90)", //background
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: theme.zIndex.appBar ? theme.zIndex.appBar : 1201,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            style={{backgroundColor: "rgba(255, 255, 255, 0.20)"}}
        >
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    {/* You can add a logo or title here */}
                    {isMobile ? (<IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon/>
                        </IconButton>) : (<Box sx={{display: "flex", gap: 2}}>
                            {navItems.map((item, idx) => item.subItems ? (<DropdownButton key={idx} item={item}/>) : (
                                <Button
                                    key={idx}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        padding: "8px 16px",
                                        transition: "transform 0.2s",
                                        "&:hover": {
                                            transform: "scale(1.1)", backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>))}
                        </Box>)}
                </Toolbar>
            </Box>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box", width: 240,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>);
};

export default Navbar;
