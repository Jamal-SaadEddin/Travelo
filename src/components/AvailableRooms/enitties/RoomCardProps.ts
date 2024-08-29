import { Room } from "../../../entities";

export interface RoomCardProps {
  room: Room;
  size?: "small" | "medium";
  editable?: boolean;
}
