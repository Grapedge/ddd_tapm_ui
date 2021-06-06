import React from 'react';
import { StoreContext } from '@/stores/StoreContext';

export const useStore = () => React.useContext(StoreContext);
