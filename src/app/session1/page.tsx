'use client';

import { Presentation } from '@/components/Presentation';
import { session1Slides } from '@/lib/slides-session1';

export default function Session1() {
  return (
    <Presentation 
      slides={session1Slides} 
      sessionTitle="Session 1: Foundations & Multi-Agent Architecture"
    />
  );
}
