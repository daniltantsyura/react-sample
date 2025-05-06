import {
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';
import { store, RootState } from '../services/store';

export type AppDispatch = typeof store.dispatch;

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<RootState>();