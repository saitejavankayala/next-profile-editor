'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/zustand';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/api';
import ProfileForm from '@/components/ProfileForm';

export default function EditProfilePage() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/profile');
    }
  }, [isLoggedIn, router]);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn && <ProfileForm />}
    </QueryClientProvider>
  );
}
