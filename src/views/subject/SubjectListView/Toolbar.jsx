import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';

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
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">SUBJEK KONSULTASI</Typography>
        <Box display="flex" justifyContent="flex-end">
          <TextField
            className={classes.textfield}
            placeholder="Cari subjek konsultasi..."
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
          >
            Bulk Upload
          </Button>
          <Button
            style={{ backgroundColor: '#16B3AC', color: '#fff' }}
            variant="contained"
          >
            + Tambah Subjek
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
