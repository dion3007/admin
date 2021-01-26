import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  FileText as FileTextIcon,
  MessageCircle as MessageCircleIcon,
  Home as HomeIcon,
  List as ListIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

const accounts = [
  {
    href: '/app/user',
    icon: UsersIcon,
    title: 'Manajemen User'
  },
  {
    href: '/app/pasien',
    icon: UserPlusIcon,
    title: 'Pasien Konsultasi'
  }
];

const settings = [
  {
    href: '/app/subjek-konsultasi',
    icon: ListIcon,
    title: 'Subjek Konsultasi'
  },
  {
    href: '/app/edukasi',
    icon: FileTextIcon,
    title: 'Edukasi'
  },
  {
    href: '/app/fasilitas',
    icon: HomeIcon,
    title: 'Fasilitas Kesehatan'
  },
  {
    href: '/app/tanya-jawab',
    icon: MessageCircleIcon,
    title: 'Tanya Jawab'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    background: 'linear-gradient(183.11deg, #0F657C 0.56%, #0BA29B 96.83%)',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.346919)',
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  });

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box p={2}>
        <List>
          {accounts.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
        <Typography style={{ color: '#FFF', fontSize: 16 }}>
          MANAJEMEN KONTEN
        </Typography>
        <List>
          {settings.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
