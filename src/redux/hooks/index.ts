import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;
