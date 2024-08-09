export interface ControlsProps {
  title: string;
  count: number;
  disabled?: boolean;
  handleChange: (name: string, count: number) => void;
}
