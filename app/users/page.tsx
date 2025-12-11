"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import UserModal from "@/public/components/Users/UserModal";
// import UserModal from "@/components/UserModal";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  phone: string;
  website: string;
  address: { city: string };
}

export default function UsersPage() {
  const { data: users, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p className="text-center py-10">Loading users...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Users
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-[#4c839e] to-[#272c27] text-white">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Company</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <td className="px-4 py-3 border-t">{user.name}</td>
                  <td className="px-4 py-3 border-t">{user.email}</td>
                  <td className="px-4 py-3 border-t">{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedUser && (
        //   <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </main>
  );
}
