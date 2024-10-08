import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@mui/material";
import FormikTextField from "@src/components/common/FormikTextField";
import useAuth from "@src/hooks/useAuth";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PromotionalSection from "./components/PromotionalSection";

const initialValues = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const auth = useAuth();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: { username: string; password: string }) => {
    const { username, password } = values;
    auth.mutate({ username, password });
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", alignContent: "center", justifyContent: "center" }}
    >
      <Grid item xs={0} md={7} lg={6}>
        <Hidden mdDown>
          <PromotionalSection />
        </Hidden>
      </Grid>

      <Grid
        item
        xs={11}
        sm={10}
        md={4}
        lg={4}
        component={Paper}
        elevation={6}
        square
        alignContent={"center"}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Formik
            initialValues={initialValues!}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <FormikTextField
                  name="username"
                  label="Username"
                  autoComplete="username"
                />
                <FormikTextField
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <Typography variant="body2" color="error" align="left">
                  {auth.error &&
                    "The username or password provided were incorrect!"}
                </Typography>
                <Typography variant="caption" color="info" align="left">
                  <strong>Hint:</strong> Type <strong>user</strong> for both
                  fields to login as user.
                </Typography>
                <Box />
                <Typography variant="caption" color="info" align="left">
                  <strong>Hint:</strong> Type <strong>admin</strong> for both
                  fields to login as admin.
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={auth.isPending}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {auth.isPending ? "Loading..." : "Sign In"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
