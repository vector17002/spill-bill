'use client'
import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navigation() {

  return (
    <nav className="flex md:flex-row justify-between items-center p-4 bg-gray-100 px-10">
      <Link href="/" className="flex items-center space-x-2">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          style={{ fill: '#6200EA' }}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="font-bold text-xl" style={{ color: '#6200EA' }}>
          Spill Bill
        </span>
      </Link>
        <UserButton />
    </nav>
  );
}