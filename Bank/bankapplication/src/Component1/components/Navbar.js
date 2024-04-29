import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bankLogo from '../images/logo3.png'
import '../styles/navbar.scss'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav>
            <div className="container1">
                <div className="logo">
                  <Link to="/">
                        <img src={bankLogo} alt="" />
                    </Link>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li>
                      <Link to="/" className={currentPath === '/' ? 'active' : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                      <Link to="/allCustomers" className={currentPath === '/allCustomers' ? 'active' : ''}>
                            View all accounts
                        </Link>
                    </li>
                    <li>
                      <Link to="/moneyTransfer" className={currentPath === '/moneyTransfer' ? 'active' : ''}>
                            Money Transfer
                        </Link>
                    </li>
                    <li>
                      <Link to="/transactions" className={currentPath === '/transactions' ? 'active' : ''}>
                            Transactions
                        </Link>
                    </li>
                    <li>
                      <Link to="/register" className={currentPath === '/signIn' ? 'active' : ''}>
                            SignIn
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const pages = ['Home', 'View all accounts', 'Money Transfer', 'Transactions'];
//   const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page, index) => (
//                 <MenuItem key={index} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page, index) => (
//               <Button
//                 key={index}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//                 href={`/${page.toLowerCase().replace(/\s/g, '')}`}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting, index) => (
//                 <MenuItem key={index} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;
