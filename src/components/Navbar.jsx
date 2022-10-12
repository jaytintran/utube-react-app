import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#2b2d42', top: 0, justifyContent: "space-between" }}>
    {/* Logo */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={60} />
    </Link>

    {/* Search Bar */}
    <SearchBar />
  </Stack>
);

export default Navbar;
