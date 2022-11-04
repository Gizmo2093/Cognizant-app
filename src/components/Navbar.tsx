import { AppBar, Box, Toolbar, ShoppingBasketIcon, IconButton, Badge, Button} from '../imports';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export const Navbar = () => {
  let cart = useAppSelector((state) => state.cart.list)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button component={Link} to={'/'} sx={{ my: 2, color: 'white', fontWeight: 700 }} >
                Cognizant
              </Button>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link} to={'/cart'}
            >
              <Badge color="secondary" badgeContent={cart.length}>
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
} 
