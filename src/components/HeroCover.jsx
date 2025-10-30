import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[76vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlays for better text contrast; pointer events disabled so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-end pb-10">
        <div className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          <div className="inline-block bg-red-700/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Live Update</div>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
            IndiaOnNews — Breaking stories, bold perspectives, live coverage
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-white/90">
            A modern, NDTV-inspired experience with real-time headlines, videos, shorts and more — built for speed and clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
