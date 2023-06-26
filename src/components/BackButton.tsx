import BackIcon from '@/assets/icons/BackIcon'
import { ReturnButton } from '@/styles/backButton.styles'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <ReturnButton onClick={() => router.push('/')} role="backbutton">
      <BackIcon />
      Voltar
    </ReturnButton>
  )
}
