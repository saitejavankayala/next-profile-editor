'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { profileSchema, ProfileData } from '@/lib/validation';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useUIStore } from '@/lib/zustand';
import { useRouter } from 'next/navigation'; 
export default function ProfileForm() {
  const router = useRouter(); 
  const setToastMessage = useUIStore((s) => s.setToastMessage);
  const queryClient = useQueryClient();
  const { data: profile, isLoading } = useQuery<ProfileData>({
    queryKey: ['profile'],
    queryFn: () => fetch('/api/profile').then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: async (formData: ProfileData) =>
      fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }),
    onSuccess: async () => {
      setToastMessage('✅ Profile updated');
      await queryClient.invalidateQueries({ queryKey: ['profile'] });
      router.push('/profile'); 
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
  });

  // Populate form with fetched data when available
  React.useEffect(() => {
    if (profile) reset(profile);
  }, [profile, reset]);

  const onSubmit = (form: ProfileData) => mutation.mutate(form);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {(['name', 'bio', 'email', 'phone', 'location'] as const).map((field) => (
            <div key={field}>
              <Label htmlFor={field}>{field.toUpperCase()}</Label>
              {field === 'bio' ? (
                <Textarea {...register(field)} />
              ) : (
                <Input {...register(field)} />
              )}
              <p className="text-red-500 text-sm">{errors[field]?.message}</p>
            </div>
          ))}
          <div className="flex gap-4">
  <Button type="submit" disabled={mutation.isPending}>
    {mutation.isPending ? 'Saving...' : 'Save'}
  </Button>
  <Button
    type="button"
    variant="outline"
    onClick={() => router.push('/profile')}
  >
    Cancel
  </Button>
</div>
        </form>
      </CardContent>
    </Card>
  );
}
