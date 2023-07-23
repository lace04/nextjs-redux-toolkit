'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment, decrement } from '@/redux/features/counterSlice';
import { useGetUserQuery, useGetUserByIdQuery } from '@/redux/services/userApi';
import UserCard from './components/UserCard';
import Counter from './components/Counter';

function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  const { data, isFetching, error, isLoading } = useGetUserQuery(null);

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <>
      <Counter />

      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-4xl font-semibold m-4'>Users</h1>
        <div className='w-4/5 grid grid-cols-3 gap-4 bg-zinc-900 rounded-md p-4'>
          {data?.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
