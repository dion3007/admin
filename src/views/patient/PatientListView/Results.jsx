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

const Results = ({ className, patients, ...rest }) => {
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
                <TableCell>ID Pasien</TableCell>
                <TableCell>No WhatsApp</TableCell>
                <TableCell>Jenis Kelamin</TableCell>
                <TableCell>Klaster Usia</TableCell>
                <TableCell>Alamat</TableCell>
                <TableCell>Keluhan</TableCell>
                <TableCell>Hasil Diagnosa</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.slice(0, limit).map(patient => (
                <TableRow hover key={patient.id}>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {patient.idPasien}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.cluster}</TableCell>
                  <TableCell>{patient.address}</TableCell>
                  <TableCell>{patient.symptomps}</TableCell>
                  <TableCell>{patient.diagnose}</TableCell>
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
        count={patients.length}
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
  patients: PropTypes.array.isRequired
};

export default Results;
