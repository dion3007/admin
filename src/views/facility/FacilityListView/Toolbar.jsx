import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  TextField,
  makeStyles,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {},
  textfield: {
    marginRight: theme.spacing(1)
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">FASILITAS KESEHATAN</Typography>
        <Box display="flex" justifyContent="flex-end">
          <TextField
            className={classes.textfield}
            placeholder="Cari Nama Faskes..."
            size="small"
            variant="outlined"
          />
          <Button
            style={{
              borderColor: '#16B3AC',
              color: '#16B3AC',
              textTransform: 'capitalize'
            }}
            className={classes.button}
            variant="outlined"
            onClick={handleClick}
          >
            <FilterListIcon fontSize="small" style={{ marginRight: 12 }} />
            Filter
            <ExpandMoreIcon fontSize="small" style={{ marginLeft: 12 }} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Button
            style={{
              borderColor: '#16B3AC',
              color: '#16B3AC',
              textTransform: 'capitalize'
            }}
            className={classes.button}
            variant="outlined"
            onClick={handleClick}
          >
            Bulk Upload
          </Button>
          <Button
            style={{ backgroundColor: '#16B3AC', color: '#fff' }}
            variant="contained"
          >
            + Tambah Faskes
          </Button>
        </Box>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
