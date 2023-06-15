import BackIcon from '@/assets/icons/BackIcon'
import { useRouter } from 'next/navigation'
import { ReturnButton } from '../../styles/BackButtonStyle'

export default function BackButton() {
  const router = useRouter()
  return (
    <ReturnButton onClick={() => router.push('/')}>
      <BackIcon />
      Voltar
    </ReturnButton>
  )
}
