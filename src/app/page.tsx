'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/zustand';
import { useEffect } from 'react';
import { useHasMounted } from '@/lib/hooks';

export default function Home() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (!hasMounted) return;
    router.push(isLoggedIn ? '/profile' : '/login');
  }, [hasMounted, isLoggedIn, router]);

  return null;
}
