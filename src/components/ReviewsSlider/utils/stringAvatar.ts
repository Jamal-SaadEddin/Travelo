import { stringToColor } from "./stringToColor";

export function stringAvatar(name: string) {
  return {
    bgcolor: stringToColor(name),
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
