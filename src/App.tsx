/* eslint-disable jsx-a11y/alt-text */
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material"
import { AddBox, AddComment, Favorite, Folder, LocationOn, Menu, Restore } from "@mui/icons-material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  const [open, setOpen] = useState(false)
  const [photos, setPhotos] = useState<any[]>([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res)=>setPhotos(res.data)).catch(er=>console.log(er))
  }, [])
  const [value, setValue] = useState("recents")

  function handleChange(event:any, newValue : any){
    setValue(newValue)
    console.log(value)
  }

  function handlerClickOpen(){
    setOpen(true)
  }

  function handleClose(){
    setOpen(false)
  }

  const theme = createTheme()
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: theme.spacing(1) }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MUI Project
            </Typography>
            <Box marginRight={2}>
              <Button color="inherit" variant="outlined" onClick={handlerClickOpen}>
                Log In
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center">Авторизация</DialogTitle>
                <DialogContent>
                  <DialogContentText>Введите свои данные для авторизации</DialogContentText>
                  <TextField autoFocus margin="dense" variant="outlined" fullWidth label='Login' />
                  <TextField autoFocus margin="dense" variant="outlined" fullWidth label='Password' />
                </DialogContent>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`, paddingTop: theme.spacing(8)}}
          sx={{position: 'relative', marginBottom: theme.spacing(4), backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat", color: 'white'}}
        >
          <Container fixed sx={{padding: theme.spacing(3)}}>
            <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)'}}
            />
            <Grid container>
              <Grid item md={6}>
                <div style={{position: "relative", padding: theme.spacing(3)}}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Web Developer Blog
                  </Typography>
                  <Typography component="h1" color="inherit" gutterBottom>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iure et adipisci ducimus ad sed. Iste, exercitationem
                    adipisci ipsa quasi repudiandae commodi tempora ducimus
                    placeat optio?
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web Developer Blog</Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolores illo veritatis alias, asperiores enim, doloremque sint perspiciatis aperiam ab, praesentium voluptatibus facere deleniti? Cupiditate tempore voluptate repellendus ducimus facilis nam, mollitia dolor aliquam doloribus corrupti iste repellat asperiores ad adipisci odio vero, magnam fugit repudiandae! Maiores provident modi repellendus!</Typography>
          <Stack direction='row' justifyContent='center' spacing={2}>
            <Button variant="contained">Start now</Button>
            <Button variant="outlined">Learn more</Button>
          </Stack>
        </Container>
        <Container sx={{marginTop: theme.spacing(2)}}>
          <Grid container spacing={4} alignItems='stretch'>
            {photos.slice(0, 6).map(photo=>(
              <Grid item key={photo.id} xs={12} sm={6} md={4}>
                <Card sx={{height: '100%', display:'flex', flexDirection: 'column'}} >
                  <CardMedia image={photo.url} sx={{height: 200}}/>
                  <CardContent>
                    <Typography variant="h6">
                      {photo.title}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{marginTop: 'auto'}}>
                    <Button size='small' color='primary'>
                      View
                    </Button> 
                    <Button size='small' color='success'>
                      Edit
                    </Button>
                    <IconButton>
                      <AddBox color="info" />
                    </IconButton>
                    <IconButton>
                      <AddComment color="warning" />
                    </IconButton>  
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center">
        </Typography>
        <BottomNavigation 
          value={value} 
          onChange={handleChange}
          
        >
          <BottomNavigationAction 
            label='Recents'
            value='recents'
            icon={<Restore/>}
          />
          <BottomNavigationAction 
            label='Favorites'
            value='favorites'
            icon={<Favorite/>}
          />
          <BottomNavigationAction 
            label='Nearby'
            value='nearby'
            icon={<LocationOn />}
          />
          <BottomNavigationAction 
            label='Folder'
            value='folder'
            icon={<Folder />}
          />
        </BottomNavigation>
        <Divider />
        <Typography align="center" color='textSecondary'  component='p' variant="subtitle1">
          Web Developer Blog Footer
        </Typography>
      </footer>
    </>
  )
}

export default App
