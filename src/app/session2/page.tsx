'use client';

import { Presentation } from '@/components/Presentation';
import { session2Slides } from '@/lib/slides-session2';

export default function Session2() {
  return (
    <Presentation 
      slides={session2Slides} 
      sessionTitle="Session 2: Validation Cycles & Advanced Workflows"
    />
  );
}
