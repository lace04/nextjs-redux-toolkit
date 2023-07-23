import { User } from '@/redux/services/userApi';

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div key={user.id} className='bg-zinc-700 p-2 rounded-md hover:bg-zinc-800'>
      <p className='text-center text-2xl font-semibold mb-4'>{user.name}</p>
      <p className='hover:text-zinc-400 hover:cursor-pointer mb-2'>
        {user.username}
      </p>
      <p className='underline text-blue-500 hover:text-blue-600 hover:cursor-pointer'>
        {user.email}
      </p>
    </div>
  );
}

export default UserCard;
