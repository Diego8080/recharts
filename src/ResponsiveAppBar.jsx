import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        <Button a href='/' color="inherit">Home Page</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Graphs
          </Typography>
          <Button a href='/linecharts' color="inherit">LineCharts</Button>
          <Button a href='/barcharts' color="inherit">BarCharts</Button>
          </Toolbar>
      </AppBar>
    </Box>
  );
}
