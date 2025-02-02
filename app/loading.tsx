'use client';

import { FC } from 'react';
import { BackgroundContainer } from '@/components/ui/backgroundContainer';

const Loading: FC = () => {
  return (
    <BackgroundContainer className="flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
          <span className="text-3xl font-semibold tracking-tight">
            House<span className="text-purple-900">Western</span>
          </span>
        </div>

        <div className="flex space-x-2">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="h-2 w-2 animate-bounce rounded-full bg-zinc-900"
              style={{
                animationDelay: `${i * 150}ms`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default Loading;
