'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/zustand';
import { useRouter } from 'next/navigation';
import { ProfileCard } from '@/components/ProfileCard';
import { ProfileData } from '@/lib/validation';

export default function ProfilePage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const router = useRouter();
  const [profile, setProfile] =useState<ProfileData | null>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [isLoggedIn, router]);

  if (!profile) return <p>Loading...</p>;

  return <ProfileCard profile={profile} />;
}
