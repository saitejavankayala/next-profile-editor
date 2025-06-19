
import { NextResponse } from 'next/server';

let profile = {
  name: 'Hello Ram!',
  bio: 'React Native Developer',
  email: 'ram @example.com',
  phone: '9999999999',
  location: 'Pune, India',
};

export async function GET() {
  return NextResponse.json(profile);
}

export async function PUT(request: Request) {
  const data = await request.json();

  profile = {
    ...profile,
    ...data,
  };

  return NextResponse.json({ success: true, profile });
}
