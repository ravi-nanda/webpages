import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputText, setInputText] = useState({
    email: "",
    password: "",
  });
  // const intialValue = {
  //   email: "ravinanda070@gmail.com",
  //   password: "8802075538",
  // };

  const handleInputChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputText({ ...inputText, [name]: value });

    setInputText({ ...inputText, [event.target.name]: event.target.value });
  };
  const toast1 = () => {
    toast.success("Success ", {
      position: toast.POSITION.TOP_CENTER,

      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      // position: toast.POSITION.TOP_CENTER,
      // autoClose: 1000,

      // progressStyle: { background: "#E8DFD0" },
      // theme: "colored",
      // // style: { background: '#766852' },
    });
  };
  const toast2 = () => {
    toast.error("Error !", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSignInClick = () => {
    const items = JSON.parse(localStorage.getItem("storageText"));

    items.email === inputText.email && items.password === inputText.password
      ? toast1()
      : toast2();
  };

  const handleCheckboxClick = () => {
    localStorage.setItem("storageText", JSON.stringify(inputText));
  };
  // useEffect(() => {}, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                // required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                value={inputText.email}
                autoComplete="email"
                // autoFocus
                onChange={handleInputChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={inputText.password}
                label="Email Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
              />

              <IconButton
                sx={{ position: "relative", bottom: "56px", left: " 42rem" }}
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                //   onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>

              <FormControlLabel
                sx={{ position: "relative", right: "27px" }}
                control={
                  <Checkbox
                    onClick={handleCheckboxClick}
                    value="remember"
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="button"
                loading={true}
                loadingPosition="center"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignInClick}
              >
                Sign In
              </Button>

              <ToastContainer />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
};
export default SignIn;
