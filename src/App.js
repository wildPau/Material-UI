import React  from 'react';
import Button from '@material-ui/core/Button';
import {AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Card, CardContent, CardActions, CardMedia, DialogContentText} from '@material-ui/core'; 
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {makeStyles} from '@material-ui/core/styles' 

import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import TextField from '@material-ui/core/TextField'; 
import Dialog from '@material-ui/core/Dialog'; 
import DialogActions from '@material-ui/core/DialogActions'; 
import DialogContent from '@material-ui/core/DialogContent'; 
import DialogTitle from '@material-ui/core/Dialog'; 

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  },
  mainFeaturesPost:{
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position:"relative",
    padding: theme.spacing(5),
    marginTop: theme.spacing(2)
  },
  overlayContent:{
    position: "absolute",
    top:0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay:"rgba(0,0,0,.3"
  },
  cardMedia: {
     paddingTop: "56.25%"
  },
  cardContent:{
    flexGrow: 1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) =>{
    setValue(newValue);
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleCLose = () =>{
    setOpen(false);
  }

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <div className={classes.overlayContent} ></div>
          <Toolbar>
              <IconButton edge="start" 
              color="inherit" aria-laabel="menu" className={classes.MenuButton}>
                <MenuIcon/>
            </IconButton>
              <Typography variant ="h6" className={classes.title}>My practical web</Typography>
              <Box mr={3}>
                <Button color="inherid" variant="outlined">Log In</Button>
              </Box>
                <Button color="secondary" variant="contained" onClick={handleClickOpen}>Registration</Button>

                <Dialog open={open} onClose={handleCLose} arial-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Log in  to see</DialogContentText>
                    <TextField autoFocus
                    margin="dense"
                    id="name"
                    label="Email adress"
                    type="email"
                    fullWidth
                    />
                    <TextField autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCLose} color="primary">Cancel</Button>
                    <Button onClick={handleCLose} color="primary">Log In</Button>
                  </DialogActions>
                </Dialog>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom>
                      React Developer 
                  </Typography>
                  <Typography
                   
                  variant="h5"
                  color="inherit"
                  paragraph>
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>  
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
               React Developer
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
                    Lorem ipsun sit amet, c onsectetur adipiscing elit. 
                    Lorem ipsun sit amet, c onsectetur adipiscing elit.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Start Now</Button>
                </Grid>
                <Grid item>
                <Button variant="outlined" color="primary">Learn more</Button>
                </Grid>

              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      component="img"
                      image="https://source.unsplash.com/random"
                      title="Image title"/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      BlogPost
                    </Typography>
                    <Typography >
                      BlogPost. ReactDevop
                      BlogPost. ReactDevop
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                  </CardActions>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBotom>Footer</Typography>
        <BottomNavigation value={value}
        onChange={handleChange} 
        className={classes.root}>
            <BottomNavigationAction
            label="Recetns"
            value="recents"
            icon={<RestoreIcon/>}/>
            
            <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}/>
            <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon/>}/>
            <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon/>}/>
        </BottomNavigation>
            <Typography align="center" color="textSecondary" component='p' variant="subtitle1">
              React Project
            </Typography>

      </footer>
            
    </>
  );
}

export default App;

/**
 * Grid сетка гридов (12 колонок) сначала идет контейнер потом элементы(масштаб относительно родителя)
 * sm md lg xl присеты для разного размера экрана
 * gutterBottom - отступ с низу
 */