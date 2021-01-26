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

const Results = ({ className, questions, ...rest }) => {
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
                <TableCell>ID Pertanyaan</TableCell>
                <TableCell>Pertanyaan</TableCell>
                <TableCell>Jawaban</TableCell>
                <TableCell>Update Terakhir</TableCell>
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.slice(0, limit).map(question => (
                <TableRow hover key={question.id}>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Typography color="textPrimary" variant="body1">
                        {question.questionId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{question.question}</TableCell>
                  <TableCell>
                    {question.answer}
                  </TableCell>
                  <TableCell>{question.lastUpdate}</TableCell>
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
        count={questions.length}
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
  questions: PropTypes.array.isRequired
};

export default Results;
