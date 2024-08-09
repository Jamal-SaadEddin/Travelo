import { RoomInfo } from "./RoomInfo";

export interface RoomBookingSelectorProps {
  roomInfo: RoomInfo;
  handleChange: (name: string, count: number) => void;
}
