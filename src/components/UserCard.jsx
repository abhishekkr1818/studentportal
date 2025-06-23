export default function UserCard({ name, email, phone, website }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <span className="font-medium">Phone:</span> {phone}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <span className="font-medium">Website:</span>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          {website}
        </a>
      </p>
    </div>
  );
}
