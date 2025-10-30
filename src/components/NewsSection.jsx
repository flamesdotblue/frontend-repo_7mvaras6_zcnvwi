import { PlayCircle, Clock, Wind, Activity } from 'lucide-react';

const sampleArticles = [
  {
    id: 1,
    title: 'Parliament Winter Session: Key Bills To Watch This Week',
    description: 'Government tables major reforms; opposition seeks detailed debate across houses.',
    category: 'News',
    time: '5m ago',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Tech Giants Bet Big On Generative AI For India Market',
    description: 'New investments announced to power startups, education and public services.',
    category: 'AI',
    time: '15m ago',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Cricket: India Clinch Last-Over Thriller In Mumbai',
    description: 'Crowd goes wild as India seal the chase with a boundary in the final ball.',
    category: 'Sports',
    time: '29m ago',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Street Food Trail: 7 Must-Try Delights Across Kolkata',
    description: 'From kati rolls to mishti doi, the flavours are irresistible and authentic.',
    category: 'Food',
    time: '1h ago',
    image: 'https://images.unsplash.com/photo-1644385808015-38d39392c4f8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJlZXQlMjBGb29kJTIwVHJhaWwlM0ElMjA3fGVufDB8MHx8fDE3NjE4NTgyNTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const sampleVideos = [
  {
    id: 'v1',
    title: 'Explained: What The New Data Law Means For You',
    thumb: 'https://images.unsplash.com/photo-1512427691650-1b0bdf97d311?q=80&w=1200&auto=format&fit=crop',
    time: '2h ago',
  },
  {
    id: 'v2',
    title: 'Shorts: Top 5 Headlines In 60 Seconds',
    thumb: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    time: '3h ago',
  },
  {
    id: 'v3',
    title: 'Travel: Hidden Gems Of Spiti Valley',
    thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    time: '5h ago',
  },
];

function ArticleCard({ item }) {
  return (
    <article className="group grid grid-cols-12 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50/50">
      <div className="col-span-5 md:col-span-4 lg:col-span-3 overflow-hidden rounded-md">
        <img src={item.image} alt={item.title} className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="col-span-7 md:col-span-8 lg:col-span-9">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-red-700 text-white">{item.category}</span>
          <span className="inline-flex items-center gap-1 text-gray-500"><Clock className="h-3.5 w-3.5" /> {item.time}</span>
        </div>
        <h3 className="mt-1 text-lg md:text-xl font-extrabold leading-snug text-gray-900 group-hover:text-red-700">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
      </div>
    </article>
  );
}

function LiveTicker() {
  const items = [
    'Breaking: Monsoon advances across northern states bringing relief.',
    'Markets: Sensex rises 250 points amid global optimism.',
    'Health: New vaccination drive launched in multiple districts.',
  ];
  return (
    <div className="bg-red-700 text-white rounded-md overflow-hidden">
      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider bg-red-800">Live News</div>
      <div className="py-3">
        <div className="animate-[scroll_18s_linear_infinite] whitespace-nowrap will-change-transform">
          <style>{`@keyframes scroll{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}`}</style>
          <div className="inline-flex gap-8 px-3">
            {items.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AQIWidget() {
  return (
    <div className="p-4 rounded-md border border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">Air Quality Index</h4>
        <Wind className="h-5 w-5 text-red-700" />
      </div>
      <div className="mt-3 flex items-end gap-3">
        <div className="text-4xl font-black text-gray-900">92</div>
        <div className="text-sm text-gray-600">Moderate</div>
      </div>
      <div className="mt-2 h-2 w-full rounded bg-gray-100">
        <div className="h-2 rounded bg-yellow-400" style={{ width: '46%' }} />
      </div>
      <p className="mt-2 text-xs text-gray-500">City: New Delhi • Updated 2m ago</p>
    </div>
  );
}

function SportsScore() {
  return (
    <div className="p-4 rounded-md border border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">Sports Scoreboard</h4>
        <Activity className="h-5 w-5 text-red-700" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded border p-3">
          <div className="font-semibold">IND vs AUS</div>
          <div className="mt-1 text-gray-700">IND 186/5 (20)</div>
          <div className="text-gray-500">AUS 178/7 (20)</div>
          <div className="mt-1 text-xs text-green-700 font-medium">India won by 8 runs</div>
        </div>
        <div className="rounded border p-3">
          <div className="font-semibold">MI vs CSK</div>
          <div className="mt-1 text-gray-700">MI 152/9 (20)</div>
          <div className="text-gray-500">CSK 153/6 (19.2)</div>
          <div className="mt-1 text-xs text-red-700 font-medium">CSK won by 4 wickets</div>
        </div>
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
      <div className="px-4 py-2 border-b bg-gray-50 font-bold">Latest Videos</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {sampleVideos.map((v) => (
          <div key={v.id} className="group">
            <div className="relative aspect-video rounded-md overflow-hidden">
              <img src={v.thumb} alt={v.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <PlayCircle className="absolute inset-0 m-auto h-12 w-12 text-white drop-shadow" />
            </div>
            <div className="mt-2 text-sm font-semibold leading-snug group-hover:text-red-700">{v.title}</div>
            <div className="text-xs text-gray-500">{v.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="relative -mt-10 z-[1]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main feed */}
          <div className="lg:col-span-8 rounded-md border border-gray-200 bg-white overflow-hidden">
            <div className="px-4 py-2 border-b bg-gray-50 font-bold flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-red-700" /> Latest Headlines
            </div>
            {sampleArticles.map((item) => (
              <ArticleCard key={item.id} item={item} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <LiveTicker />
            <AQIWidget />
            <SportsScore />
            <VideoSection />
          </div>
        </div>
      </div>
    </section>
  );
}
