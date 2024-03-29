import Link from 'next/link'
import { CartIcon } from '../assets/icons/cartIcon'
import { useAppSelector } from '../hooks/Reduxhooks'
import { CartStyle, Elipse } from '../styles/CartIconStyles'

export default function CartTotalAmount() {
  const count = useAppSelector((state) => state.shoppingCart.cartQuantity)

  return (
    <CartStyle>
      <Link href={'/cart'}>
        <CartIcon />
        {count > 0 ? (
          <Elipse>
            <span>{count}</span>
          </Elipse>
        ) : (
          ''
        )}
      </Link>
    </CartStyle>
  )
}
