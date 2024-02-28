"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import fbFriends from '../data/facebook-friends.json';


export default function Home() {
  const [friends, setFriends] = useState<Array<{
    timestamp: number,
    name: string,
    contact_info?: any
}>
>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {console.log('friends: ', fbFriends.friends_v2)} */}
      {/* {console.log('friends: ', friends)} */}
      <div className="">
        
        <button onClick={() => {

          let arr =  fbFriends.friends_v2.map(friend => {
          
              // console.log('friend: ', friend)
              return friend

          })
          console.log('arr: ', arr)

          setFriends([...friends, ...arr])
      }

      }>display friends</button>
      <ul>

        {friends.map(friend => (
          <li key={friend.timestamp}>
            {friend.name}
          </li>
        ))}
      </ul>

        
      </div>
    </main>
  );
}
