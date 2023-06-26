import { AppDispatch, RootState } from '@/redux/Store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// hooks to be able to use the reducer
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
