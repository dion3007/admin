import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PatientListView = () => {
  const classes = useStyles();
  const [patients] = useState(data);

  return (
    <Page className={classes.root} title="Pasien">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results patients={patients} />
        </Box>
      </Container>
    </Page>
  );
};

export default PatientListView;
