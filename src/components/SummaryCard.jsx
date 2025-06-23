export default function SummaryCard({ title, value, color }) {
  return (
    <div
      className={`rounded shadow p-6 flex flex-col items-center justify-center text-white ${color} hover:scale-105 transition-transform`}
    >
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-lg">{title}</div>
    </div>
  );
}
