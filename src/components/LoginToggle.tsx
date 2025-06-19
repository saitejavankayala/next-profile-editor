// src/components/LoginToggle.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/lib/zustand';

export default function LoginToggle() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);

  return (
    <Button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  );
}
