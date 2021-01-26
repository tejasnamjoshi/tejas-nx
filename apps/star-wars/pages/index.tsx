import Image from 'next/image';
import React from 'react';

export function Index() {
  return (
    <div className="text-center">
      <h1>Welcome Home</h1>
      <Image src="/logo.png" layout="intrinsic" width={900} height={500} />
    </div>
  );
}

export default Index;
