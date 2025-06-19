'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProfileData } from '@/lib/validation';
import { useAuthStore } from '@/lib/zustand';

export function ProfileCard({ profile }: { profile: ProfileData }) {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardContent className="space-y-2">
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p>{profile.bio}</p>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
        <p>{profile.location}</p>

        {isLoggedIn && (
          <div className="pt-4">
            <Link href="/edit-profile">
              <Button>Edit Profile</Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
