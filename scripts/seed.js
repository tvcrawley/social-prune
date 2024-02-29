const { db } = require('@vercel/postgres');
const {
  friends,
} = require('../data/facebook-friends.json');

async function seedFriends(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "friends" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS friends (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        timestamp VARCHAR(255) NOT NULL,
        contact_info VARCHAR(255)
      );
    `;

    console.log(`Created "friends" table`);

    // Insert data into the "friends" table
    const insertedFriends = await Promise.all(
      friends.friends_v2.map(
        (friend) => client.sql`
        INSERT INTO friends (id, name, timestamp, contact_info)
        VALUES (${friend.id}, ${friend.name}, ${friend.timestamp}, ${friend.contact_info})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedFriends.length} friends`);

    return {
      createTable,
      friends: insertedFriends,
    };
  } catch (error) {
    console.error('Error seeding friends:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedFriends(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});