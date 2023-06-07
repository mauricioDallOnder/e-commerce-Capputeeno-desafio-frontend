import { CartIcon } from '../../assets/icons/cart-icon'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CartStyle, Elipse } from './cartStyle'
export default function CartControl() {
    const count = useAppSelector((state) => state.counterReducer.value);
    return (
        <CartStyle>
            <CartIcon />
            {count > 0 ?
                <Elipse>
                    <span>{count}</span>
                </Elipse> :
                ""
            }

        </CartStyle>
    )
}