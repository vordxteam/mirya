// app/page.tsx
import FullCalendarComponent from './FullCalendarComponent';

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">My Next.js Calendar</h1>
      <FullCalendarComponent />
    </main>
  );
}
