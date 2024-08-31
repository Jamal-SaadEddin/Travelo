import { Room } from "../../../entities/Room";

export interface RoomCardProps {
  room: Room;
  size?: "small" | "medium";
  editable?: boolean;
}
