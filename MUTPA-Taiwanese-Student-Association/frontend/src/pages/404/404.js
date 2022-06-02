import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => (
  <>
    <Box
      component="main"
      style={{
        "alignItems": 'center',
        "display": 'flex',
        "flexGrow": "1",
        "minHeight": '80%'
      }}
    >
      <Container maxWidth="md">
        <Box
          style={{
            "alignItems": 'center',
            "display": 'flex',
            "flex-direction": 'column'
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h3"
            style={{"marginTop": "5%"}}
          >
            404: The page you are looking for isn’t completed, or you should try again later.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              // src="/static/images/undraw_page_not_found_su7k.svg"
              src="/static/images/undraw_resume_folder_2_arse.svg"        
              style={{
                "margin-top": "5%",
                "display": 'inline-block',
                "maxWidth": '100%',
                "width": "360"
              }}
            />
          </Box>
          <Link
            to="/"
            passHref
          >
            <Button
              startIcon={(<ArrowBackIcon fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
              style={{"margin-bottom": "10%", "backgroundColor": "#1475c3e1", "color": "black"}}
            >
              Go back to Home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;
