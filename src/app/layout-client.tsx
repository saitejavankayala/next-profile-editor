'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';
import ToastListener from '@/components/ToastListener';
import LoginToggle from '@/components/LoginToggle';
import { useHasMounted } from '@/lib/hooks';

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showLoginToggle = pathname !== '/login';
  const hasMounted = useHasMounted();

  if (!hasMounted) return null; 
  return (
    <>
      {showLoginToggle && (
        <div className="p-4 flex justify-end">
          <LoginToggle />
        </div>
      )}
      {children}
      <Toaster />
      <ToastListener />
    </>
  );
}
