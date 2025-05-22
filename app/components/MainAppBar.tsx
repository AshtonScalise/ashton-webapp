"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useRouter } from "next/navigation";

const pages = ["Home"]; //, "Demos"];
const settings = ["Profile", "Account", "Logout"];

export default function MainAppBar() {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickUserMenu = (action: string) => {
    if (action === "Logout") {
      router.push("/api/auth/signout");
    }
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
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
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link
                  href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  passHref
                >
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* <Typography
          variant="h6"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Placeholder
        </Typography> */}

        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ color: "white" }}
              component={Link}
              href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            >
              {page}
            </Button>
          ))}
        </Box>

        <ThemeToggleButton />

        {status === "loading" && <Typography>Loading...</Typography>}

        {status === "authenticated" && (
          <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={session.user?.image || ""} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleClickUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}

        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" passHref>
            <Button color="inherit" sx={{ ml: "auto" }}>
              Sign In (disabled for now)
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
