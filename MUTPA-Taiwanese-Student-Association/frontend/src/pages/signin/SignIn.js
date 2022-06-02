import React from "react"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Google as GoogleIcon } from '../../icons/google';

export default function SignIn () {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
    })
  });


  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 5 }}>
            <Typography
              color="textPrimary"
              variant="h2"
              align="center"
            >
              Sign in
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={16}
              md={16}
            >
              <Button
                fullWidth
                color="error"
                startIcon={<GoogleIcon />}
                size="large"
                variant="contained"
                href='/'
              >
                Login with Google
              </Button>
              <br />
            </Grid>
          </Grid>
          <Box
            sx={{
              pb: 1,
              pt: 3
            }}
          >
            <Typography
              align="center"
              color="textSecondary"
              variant="body1"
            >
              or login with email address
            </Typography>
          </Box>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              href='/'
            >
              Sign In
            </Button>
          </Box>


          <br />
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Don&apos;t have an account?
            {' '}
            <a
              href="/contact"
            >
              <Link
                to="/contact"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: 'pointer'
                }}
              >
                Contact Us
              </Link>
            </a>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

