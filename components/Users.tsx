//"use client";
import { User } from "@/app/page";
import Link from "next/link";
import React from "react";

interface Props {
  users: User[];
}

const Users = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md flex text-black justify-between">
            <div>
              <h5 className="font-bold">
                {user.first_name} {user.last_name}
              </h5>
            </div>
            <img src={user.avatar} alt="" className="rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;
