import { useState } from 'react';

import PasswordUpdated from '@/templates/Reset/PasswordUpdated';
import ResetPassword from '@/templates/Reset/ResetPassword';

const Reset = () => {
  const [isPasswordInput, setIsPasswordInput] = useState(true);

  const handleSwitchScreen = () => {
    setIsPasswordInput((prev) => !prev);
  };

  return (
    <>
      {isPasswordInput && <ResetPassword handleSwitch={handleSwitchScreen} />}
      {!isPasswordInput && <PasswordUpdated />}
    </>
  );
};

export default Reset;
