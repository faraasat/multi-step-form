import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { StepIconProps } from "@material-ui/core/StepIcon";
import "./form-stepper.styles.css";
import FormOneComponent from "../form-one/form-one.component";
import FormTwoComponent from "../form-two/form-two.component";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FormThreeComponent from "../form-three/form-three.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faInfo,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const ColorLineConnector = withStyles({
  alternativeLabel: {
    top: 30,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(33, 183, 242) 0%, rgb(233, 188, 64) 50%, rgb(35, 138, 69) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(33, 183, 242) 0%, rgb(233, 188, 64) 50%, rgb(35, 138, 69) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColoredIcons = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ["& svg"]: {
      fontSize: "37px !important",
    },
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

const ColorStepIcons = (props: StepIconProps) => {
  const classes = useColoredIcons();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <VerifiedUserIcon />,
    2: <FontAwesomeIcon icon={faShareAlt} />,
    3: <FontAwesomeIcon icon={faInfo} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

function getSteps() {
  return ["Account Setup", "Social Information", "Personal Information"];
}

const getStepForm = (
  step: number,
  steps: string[],
  activeStep: number,
  handleBack: () => void,
  handleNext: () => void
) => {
  switch (step) {
    case 0:
      return (
        <FormOneComponent
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          steps={steps}
        />
      );
    case 1:
      return (
        <FormTwoComponent
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          steps={steps}
        />
      );
    case 2:
      return (
        <FormThreeComponent
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
          steps={steps}
        />
      );
    default:
      return "Unknown step";
  }
};

const FormStepperComponent = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="form-stepper__root">
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorLineConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorStepIcons}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="form-stepper__forms">
        {activeStep === steps.length ? (
          <div className="form-stepper__forms-form form-stepper__forms-form__true">
            <FontAwesomeIcon icon={faCheckCircle} />
            <Typography>You Have Completed the form successfully!</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className="form-stepper__forms-form">
            {getStepForm(activeStep, steps, activeStep, handleBack, handleNext)}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormStepperComponent;
