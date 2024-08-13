export interface SliderComponentProps {
  title: string;
  value: number[];
  handleValueChange: (event: Event, newValue: number | number[]) => void;
  steps: number;
  minValue: number;
  maxValue: number;
  valueLabelFormat: (value: number) => string;
  ariaLabelledBy: string;
}
