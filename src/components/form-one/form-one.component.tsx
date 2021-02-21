import {
  Button,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import "./form-one.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IFormOne } from "./form-one";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

const FormOneComponent: React.FC<IFormOne> = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
}) => {
  const formik: any = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      password: "",
      passwordCheck: "",
    },
    onSubmit: (value: any): any => {
      console.log(value);
      handleNext();
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Too short for a name!")
        .max(15, "Ohh! Very Long Name.")
        .required("This is a required field."),
      lastName: Yup.string()
        .min(3, "Too short for a name!")
        .max(15, "Ohh! Very Long Name.")
        .required("This is a required field."),
      email: Yup.string().email().required("This is a required field."),
      gender: Yup.string().required("This is a required field."),
      password: Yup.string()
        .min(8, "Too short Password!")
        .max(15, "How will you Remember this long password?")
        .required("This is a required field."),
      passwordCheck: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("This is a required field."),
    }),
  });

  return (
    <form className="form-one" onSubmit={formik.handleSubmit}>
      <h1 className="form-one__head">Account Details</h1>
      <p className="form-one__para">So that we remember you!</p>
      <div className="form-one__root">
        <div className="form-one__col">
          <label>
            <p>First Name:</p>
            <TextField
              id="firstName"
              label="First Name"
              placeholder="e.g. Max"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              helperText={formik.errors.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon style={{ color: "#838383" }} />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Email:</p>
            <TextField
              id="email"
              label="Email"
              placeholder="e.g. max.adam@example.com"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: "#838383" }} />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Create Password:</p>
            <TextField
              id="password"
              type="password"
              label="Create Password"
              placeholder="e.g. Abc@$1234"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.password}
              helperText={formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: "#838383" }} />
                  </InputAdornment>
                ),
              }}
            />
          </label>
        </div>
        <div className="form-one__col">
          <label>
            <p>Last Name:</p>
            <TextField
              id="lastName"
              label="Last Name"
              fullWidth
              placeholder="Adam"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              helperText={formik.errors.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon style={{ color: "#838383" }} />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Gender:</p>
            <Select
              labelId="gender"
              variant="outlined"
              id="gender"
              name="gender"
              fullWidth
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="others">Others</MenuItem>
              <FormHelperText>{formik.errors.gender}</FormHelperText>
            </Select>
          </label>
          <label>
            <p>Confirm Password:</p>
            <TextField
              id="passwordCheck"
              type="password"
              label="Confirm Password"
              placeholder="e.g. Abc@$1234"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.passwordCheck}
              helperText={formik.errors.passwordCheck}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: "#838383" }} />
                  </InputAdornment>
                ),
              }}
            />
          </label>
        </div>
      </div>
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </form>
  );
};

export default FormOneComponent;
