import React, { useEffect } from 'react';
import { useModal } from 'hooks/useModal';
import { useSelector } from 'react-redux';
import { selectGenresData } from 'features/moviesSlice';
import { useNavigate } from 'react-router-dom';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Logo from 'components/atoms/Logo/Logo';
import GenreButton from 'components/atoms/GenreButton/GenreButton';
import { Input } from 'components/atoms/Input/Input';
import { StyledNav, boxStyles } from './Navigation.styles';

const Navigation = () => {
  const { isOpen, handleOpen, handleClose } = useModal();
  const genres = useSelector(selectGenresData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen === false) return;
    return () => {
      handleClose();
    };
  }, [handleClose, isOpen]);

  return (
    <StyledNav>
      <Hamburger onClick={handleOpen} />
      <Drawer open={isOpen} onClose={handleClose}>
        <Box sx={boxStyles}>
          <Logo onClick={() => navigate('/')} />
          <GenreButton to="watchlist">Watchlist</GenreButton>
          {genres.map(({ id, name }) => (
            <GenreButton key={id} to={`genre/${name}`}>
              {name}
            </GenreButton>
          ))}
        </Box>
      </Drawer>
      <Input type="text" placeholder="Search for a movie..." />
    </StyledNav>
  );
};

export default Navigation;
