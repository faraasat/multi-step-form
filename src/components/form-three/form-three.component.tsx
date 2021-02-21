import { Button, InputAdornment, TextField } from "@material-ui/core";
import "./form-three.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IFormThree } from "./form-three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faBuilding,
  faFlag,
  faGraduationCap,
  faMapMarkerAlt,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

const FormThreeComponent: React.FC<IFormThree> = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
}) => {
  const formik: any = useFormik({
    initialValues: {
      fullName: "",
      country: "",
      birthday: "",
      address: "",
      education: "",
      job: "",
    },
    onSubmit: (value: any): any => {
      console.log(value);
      handleNext();
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Too short!")
        .max(20, "Too Long!")
        .required("This Field is Required"),
      country: Yup.string()
        .min(3, "Too short!")
        .max(20, "Too Long!")
        .required("This Field is Required"),
      birthday: Yup.string().required("This Field is Required"),
      address: Yup.string()
        .min(3, "Too short!")
        .max(20, "Too Long!")
        .required("This Field is Required"),
      education: Yup.string()
        .min(3, "Too short!")
        .max(20, "Too Long!")
        .required("This Field is Required"),
      job: Yup.string()
        .min(3, "Too short!")
        .max(20, "Too Long!")
        .required("This Field is Required"),
    }),
  });

  return (
    <form className="form-three" onSubmit={formik.handleSubmit}>
      <h1 className="form-three__head">Personal Information</h1>
      <p className="form-three__para">So that we can make understanding!</p>
      <div className="form-three__root">
        <div className="form-three__col">
          <label>
            <p>Full Name:</p>
            <TextField
              id="fullName"
              label="Full Name"
              placeholder="e.g. Max Adams"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              helperText={formik.errors.fullName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faSignature}
                      style={{ color: "#727272", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Country:</p>
            <TextField
              id="country"
              label="Country"
              placeholder="e.g. Pakistan"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.country}
              helperText={formik.errors.country}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faFlag}
                      style={{ color: "#646464", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Birthday:</p>
            <TextField
              id="birthday"
              label="Birthday"
              placeholder="e.g. 01/01/2000"
              fullWidth
              type="date"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.birthday}
              helperText={formik.errors.birthday}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faBirthdayCake}
                      style={{ color: "#646464", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
        </div>
        <div className="form-one__col">
          <label>
            <p>Address:</p>
            <TextField
              id="address"
              label="Complete Address"
              fullWidth
              placeholder="e.g. House No., Street Address, City"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.address}
              helperText={formik.errors.address}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ color: "#727272", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Education:</p>
            <TextField
              id="education"
              label="Education"
              fullWidth
              placeholder="e.g. Bachelors"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.education}
              helperText={formik.errors.education}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      style={{ color: "#727272", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Job Title:</p>
            <TextField
              id="job"
              label="Job Title"
              fullWidth
              placeholder="e.g. Software Engineer"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.job}
              helperText={formik.errors.job}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      style={{ color: "#727272", fontSize: "1.5rem" }}
                    />
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

export default FormThreeComponent;
