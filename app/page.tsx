import Users from "@/components/Users";

const fetchUsers = async () => {
  const res = await fetch(`https://reqres.in/api/users`);
  const data = await res.json();
  return data.data;
};

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const HomePage = async () => {
  const users: User[] = await fetchUsers();
  return <Users users={users} />;
};

export default HomePage;
