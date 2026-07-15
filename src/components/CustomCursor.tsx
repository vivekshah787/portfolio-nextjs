'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0), my = useRef(0), fx = useRef(0), fy = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.transform = `translate(${mx.current - 5}px, ${my.current - 5}px)`;
    };

    const animate = () => {
      fx.current += (mx.current - fx.current) * 0.12;
      fy.current += (my.current - fy.current) * 0.12;
      follower.style.transform = `translate(${fx.current - 18}px, ${fy.current - 18}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const addActive = () => cursor.classList.add('active');
    const removeActive = () => cursor.classList.remove('active');
    const interactiveEls = document.querySelectorAll('a, button, .pf-item');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', addActive);
      el.addEventListener('mouseleave', removeActive);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} id="cursor" />
      <div className="cursor-follower" ref={followerRef} id="cursorFollower" />
    </>
  );
}
