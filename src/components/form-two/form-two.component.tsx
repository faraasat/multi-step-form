import { Button, InputAdornment, TextField } from "@material-ui/core";
import "./form-two.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IFormOne } from "./form-two";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import TwitterIcon from "@material-ui/icons/Twitter";

const FormTwoComponent: React.FC<IFormOne> = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
}) => {
  const formik: any = useFormik({
    initialValues: {
      facebook: "",
      twitter: "",
      github: "",
      linkedIn: "",
      whatsapp: "",
      telegram: "",
    },
    onSubmit: (value: any): any => {
      console.log(value);
      handleNext();
    },
    validationSchema: Yup.object({
      facebook: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("This is a required field."),
      twitter: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("This is a required field."),
      github: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("This is a required field."),
      linkedIn: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("This is a required field."),
      whatsapp: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("This is a required field."),
      telegram: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("This is a required field."),
    }),
  });

  return (
    <form className="form-two" onSubmit={formik.handleSubmit}>
      <h1 className="form-two__head">Social Information</h1>
      <p className="form-two__para">So that we can now you better!</p>
      <div className="form-two__root">
        <div className="form-two__col">
          <label>
            <p>Facebook Account:</p>
            <TextField
              id="facebook"
              label="Facebook Account"
              placeholder="e.g. https://facebook.com/max_adam"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.facebook}
              helperText={formik.errors.facebook}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      style={{ color: "#0400ff", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Github Account:</p>
            <TextField
              id="github"
              label="GitHub Account"
              placeholder="e.g. https://github.io/max_adam"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.github}
              helperText={formik.errors.github}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faGithubAlt}
                      style={{ color: "#646464", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>WhatsApp Account:</p>
            <TextField
              id="whatsapp"
              label="WhatsApp Account"
              placeholder="e.g. https://w.me/abc"
              fullWidth
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.whatsapp}
              helperText={formik.errors.whatsapp}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ color: "#53da5a", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
        </div>
        <div className="form-one__col">
          <label>
            <p>Twitter Account:</p>
            <TextField
              id="twitter"
              label="Twitter Account"
              fullWidth
              placeholder="https://twitter.com/max_adam"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.twitter}
              helperText={formik.errors.twitter}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon style={{ color: "#5993ff" }} />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>LinkedIn Account:</p>
            <TextField
              id="linkedIn"
              label="LinkedIn Account"
              fullWidth
              placeholder="https://linkedin.com/in/max_adam"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.linkedIn}
              helperText={formik.errors.linkedIn}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      style={{ color: "#263aec", fontSize: "1.5rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </label>
          <label>
            <p>Telegram Account:</p>
            <TextField
              id="telegram"
              label="Telegram Account"
              fullWidth
              placeholder="https://te.com/abc"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.telegram}
              helperText={formik.errors.telegram}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon
                      icon={faTelegramPlane}
                      style={{ color: "#26a3ec", fontSize: "1.5rem" }}
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

export default FormTwoComponent;
