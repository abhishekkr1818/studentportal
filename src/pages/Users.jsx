import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-indigo-600 dark:text-indigo-400 animate-pulse">Loading users...</span>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-red-500">{error}</span>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Users
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-800 rounded shadow p-4 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {user.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Website:</span>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
