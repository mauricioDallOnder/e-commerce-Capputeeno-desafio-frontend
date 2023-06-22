import BackIcon from '@/assets/icons/BackIcon'
import { useRouter } from 'next/navigation'
import { ReturnButton } from '../../styles/BackButton.styles'

export default function BackButton() {
  const router = useRouter()
  return (
    <ReturnButton onClick={() => router.push('/')} role="backbutton">
      <BackIcon />
      Voltar
    </ReturnButton>
  )
}
