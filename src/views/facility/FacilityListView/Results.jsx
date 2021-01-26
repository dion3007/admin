import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Edit3 as Edit3Icon, Trash2 as Trash2Icon } from 'react-feather';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, facilities, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID Faskes</TableCell>
                <TableCell>Nama Faskes</TableCell>
                <TableCell>Alamat</TableCell>
                <TableCell>No Telp/WhatsApp</TableCell>
                <TableCell>Update Terakhir</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {facilities.slice(0, limit).map(facility => (
                <TableRow hover key={facility.id}>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {facility.facilityId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{facility.name}</TableCell>
                  <TableCell>
                    {facility.address}
                  </TableCell>
                  <TableCell>{facility.phone}</TableCell>
                  <TableCell>{facility.lastUpdate}</TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <IconButton>
                        <Edit3Icon />
                        <Trash2Icon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={facilities.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  facilities: PropTypes.array.isRequired
};

export default Results;
