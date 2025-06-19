'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useUIStore } from '@/lib/zustand';

export default function ToastListener() {
  const message = useUIStore((s) => s.toastMessage);
  const clear = useUIStore((s) => s.clearToastMessage);

  useEffect(() => {
    if (message) {
      toast.success(message);
      clear();
    }
  }, [message, clear]);

  return null;
}
