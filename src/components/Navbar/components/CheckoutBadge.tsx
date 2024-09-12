import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";
import useCartStore from "@src/store/cartStore";

const CheckoutBadge = () => {
  const bookedRooms = useCartStore((s) => s.bookedRooms);

  return (
    <Badge badgeContent={bookedRooms.length} color="error">
      <ShoppingCartCheckoutIcon />
    </Badge>
  );
};

export default CheckoutBadge;
