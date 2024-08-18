export interface ToggleButtonsGroupProps {
  title: string;
  buttons: { name: string; description?: string; icon?: JSX.Element }[];
  selectedButtons: string[];
  toggleButton: (buttonName: string) => void;
}
