import { CartIcon } from '../assets/icons/cartIcon'
import { useAppSelector } from '../../hooks/Reduxhooks'
import { CartStyle, Elipse } from '../../styles/cartStyle'
export default function CartTotalAmount() {
  const count = useAppSelector((state) => state.counter.value)
  return (
    <CartStyle>
      <CartIcon />
      {count > 0 ? (
        <Elipse>
          <span>{count}</span>
        </Elipse>
      ) : (
        ''
      )}
    </CartStyle>
  )
}
