export default function Dashboard() {
  const stats = [
    { label: "GPA", value: "3.85", color: "bg-blue-500" },
    { label: "Attendance", value: "90%", color: "bg-green-500" },
    { label: "Subjects", value: "12/15", color: "bg-purple-500" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded shadow p-6 flex flex-col items-center justify-center text-white ${stat.color} hover:scale-105 transition-transform`}
          >
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
