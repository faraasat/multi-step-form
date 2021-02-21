export interface IFormOne {
  steps: string[];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}
