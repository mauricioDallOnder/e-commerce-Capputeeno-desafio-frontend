import { CartIcon } from '../../assets/icons/cart-icon'
import { useAppDispatch, useAppSelector } from "../../../hooks/Reduxhooks";
import { CartStyle, Elipse } from './cartStyle'
export default function CartTotalAmount() {
    const count = useAppSelector((state) => state.counter.value);
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