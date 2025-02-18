/*
// Navbar.jsx
import React, {useEffect, useRef, useState} from 'react';
import {
    Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, useMediaQuery, useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import gsap from 'gsap';
import DropdownButton from "./DropdownButton.jsx";

// Define the navigation items with their labels and target paths.
const navItems = [
    { label: 'Überblick', path: '/uberblick' },
    {
        label: 'Literatur',
        path: '/literatur',
        subItems: [
            { label: 'Epochen', path: '/literatur/epochen' },
            { label: 'Autoren', path: '/literatur/autoren' },
            { label: 'Werke', path: '/literatur/werke' }
        ]
    },
    {label: 'Geschichte', path: '/geschichte'}, {
        label: 'Rolle der Frau', path: '/rolle-der-frau'
    }, {label: 'Kunst & Musik', path: '/kunst-musik'}, {label: 'Der Romantiker', path: '/der-romantiker'},
    // Add subItems to other items as needed...
];


const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Run a GSAP animation when the navbar mounts.
    useEffect(() => {
        gsap.from(navRef.current, {
            duration: 1, y: -50, opacity: 0, ease: 'power2.out',
        });
    }, []);

    // Toggle the mobile drawer.
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Set a background color that adapts to light/dark mode.
    const backgroundColor = theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.9)' // increased opacity for light mode
        : 'rgba(0, 0, 0, 0.9)';       // increased opacity for dark mode

    // Drawer content for mobile view.
    const drawer = (<Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
        <List>
            {navItems.map((item, idx) => (<ListItem button key={idx} component={Link} to={item.path}>
                <ListItemText primary={item.label}/>
            </ListItem>))}
        </List>
    </Box>);

    return (<>
        <Box
            ref={navRef}
            sx={{
                width: '100%',
                position: 'fixed',
                top: 45,
                left: 0,
                backdropFilter: 'blur(10px)', // Frosted glass effect.
                backgroundColor: backgroundColor,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: theme.zIndex.appBar, // Ensure it appears above other elements.
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                {/!* You can add a logo or title here *!/}
                {isMobile ? (// Mobile view: show hamburger menu.
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>) : (// Desktop view: show nav items.
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navItems.map((item, idx) => (
                            item.subItems ? (
                                <DropdownButton key={idx} item={item} />
                            ) : (
                                <Button
                                    key={idx}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        padding: '8px 16px',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            )
                        ))}
                    </Box>)}
            </Toolbar>
        </Box>

        {/!* Mobile Drawer *!/}
        <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box', width: 240,
                },
            }}
        >
            {drawer}
        </Drawer>
    </>);
};

export default Navbar;
*/
// Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import gsap from "gsap";
import DropdownButton from "./DropdownButton.jsx";

const navItems = [
    { label: "Überblick", path: "/uberblick" },
    {
        label: "Literatur",
        path: "/literatur",
        subItems: [
            { label: "Epochen", path: "/literatur/epochen" },
            { label: "Autoren", path: "/literatur/autoren" },
            { label: "Werke", path: "/literatur/werke" },
        ],
    },
    { label: "Geschichte", path: "/geschichte" },
    { label: "Rolle der Frau", path: "/rolle-der-frau" },
    { label: "Kunst & Musik", path: "/kunst-musik" },
    { label: "Der Romantiker", path: "/der-romantiker" },
    // …other nav items
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        gsap.from(navRef.current, {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power2.out",
        });
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const backgroundColor =
        theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(0, 0, 0, 0.9)";

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <List>
                {navItems.map((item, idx) => (
                    <ListItem button key={idx} component={Link} to={item.path}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box
                ref={navRef}
                sx={{
                    width: "100%",
                    position: "fixed",
                    top: 45,
                    left: 0,
                    backdropFilter: "blur(10px)",
                    backgroundColor: backgroundColor,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: theme.zIndex.appBar,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* You can add a logo or title here */}
                    {isMobile ? (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {navItems.map((item, idx) =>
                                item.subItems ? (
                                    <DropdownButton key={idx} item={item} />
                                ) : (
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
                                                transform: "scale(1.1)",
                                                backgroundColor: "transparent",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            )}
                        </Box>
                    )}
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
                        boxSizing: "border-box",
                        width: 240,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
