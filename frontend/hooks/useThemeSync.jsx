import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateUserTheme } from '@/redux/slices/userSlice';

export const useThemeSync = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    if (user && user.systemConfig && user.systemConfig.theme !== undefined) {
      dispatch(updateUserTheme(user.systemConfig.theme));
    } else {
      dispatch(updateUserTheme(false));
    }
  }, [user, dispatch]);
};
