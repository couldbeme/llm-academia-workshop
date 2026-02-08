'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { SlideRenderer } from './SlideRenderer';

interface PresentationProps {
  slides: any[];
  sessionTitle: string;
}

export function Presentation({ slides, sessionTitle }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, slides.length - 1)));
  }, [slides.length]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        case 'f':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleFullscreen, slides.length, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation */}
      {!isFullscreen && (
        <nav className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <button
            onClick={() => goToSlide(0)}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm transition"
            title="Go to start (Home)"
          >
            ⏮
          </button>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm transition disabled:opacity-50"
            title="Previous (←)"
          >
            ←
          </button>
          <span className="px-3 py-1.5 bg-gray-900 rounded text-sm font-mono">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm transition disabled:opacity-50"
            title="Next (→ or Space)"
          >
            →
          </button>
          <button
            onClick={() => goToSlide(slides.length - 1)}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm transition"
            title="Go to end (End)"
          >
            ⏭
          </button>
          <button
            onClick={toggleFullscreen}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded text-sm transition ml-2"
            title="Toggle fullscreen (F)"
          >
            {isFullscreen ? '⛶' : '⛶'}
          </button>
        </nav>
      )}

      {/* Session indicator */}
      {!isFullscreen && (
        <div className="fixed top-4 left-4 z-50 text-sm text-gray-500">
          {sessionTitle}
        </div>
      )}

      {/* Slide content */}
      <main className="pt-8">
        <SlideRenderer 
          slide={slides[currentSlide]} 
          index={currentSlide}
          total={slides.length}
        />
      </main>

      {/* Keyboard hints */}
      {!isFullscreen && (
        <div className="fixed bottom-4 left-4 text-xs text-gray-600 space-x-4">
          <span><kbd className="bg-gray-800 px-1.5 py-0.5 rounded">←</kbd> <kbd className="bg-gray-800 px-1.5 py-0.5 rounded">→</kbd> Navigate</span>
          <span><kbd className="bg-gray-800 px-1.5 py-0.5 rounded">Space</kbd> Next</span>
          <span><kbd className="bg-gray-800 px-1.5 py-0.5 rounded">F</kbd> Fullscreen</span>
        </div>
      )}

      {/* Click areas for navigation */}
      <div 
        className="fixed inset-y-0 left-0 w-1/4 cursor-pointer z-40"
        onClick={prevSlide}
      />
      <div 
        className="fixed inset-y-0 right-0 w-1/4 cursor-pointer z-40"
        onClick={nextSlide}
      />
    </div>
  );
}
