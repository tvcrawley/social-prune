"use client"; // This is a client component 👈🏽

import { useState } from 'react';
// import fbFriends from '../data/facebook-friends.json';
const fbFriends = {"friends_v2": [
  {
    "name": "Shalita Chism",
    "timestamp": 1708984261
  },
  {
    "name": "Adam Herod",
    "timestamp": 1707503402
  },
  {
    "name": "Stephanie Bragg",
    "timestamp": 1707247404
  },
  {
    "name": "Rick Hartunian",
    "timestamp": 1706813590
  },
  {
    "name": "Keller Williams RC",
    "timestamp": 1706574864
  },
]}

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
          // console.log('arr: ', arr)

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
