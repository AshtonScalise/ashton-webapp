"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function MainAppBar() {
  const { status, data: session } = useSession();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Placeholder
        </Typography>
        <ThemeToggleButton /> {/* Use the new ThemeToggleButton here */}
        {status === "loading" && <Typography>Loading...</Typography>}
        {status === "authenticated" && (
          <>
            <Typography>{session.user!.name}</Typography>
            <Link href="/api/auth/signout" passHref>
              <Button color="inherit" sx={{ ml: "auto" }}>
                Sign out
              </Button>
            </Link>
          </>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" passHref>
            <Button color="inherit" sx={{ ml: "auto" }}>
              Sign In
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
