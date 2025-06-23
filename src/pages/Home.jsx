export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
        Welcome to Student Portal
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl">
        Manage your academic details, view your performance, and connect with fellow students, all in one place.
      </p>
    </div>
  );
}
