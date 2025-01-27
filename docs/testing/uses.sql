CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL UNIQUE
);

CREATE ACTION create_user($name text) public {
  // derive a deterministic uuid from the blockchain transaction ID
  // https://www.postgresql.org/docs/16.1/uuid-ossp.html#UUID-OSSP-FUNCTIONS-SECT
  $uuid := uuid_generate_v5('f541de32-5ede-4083-bdbc-b29c3f02be9e'::uuid, @txid);

  insert into users (id, name, address)
  values ($uuid, $name, @caller);
}

CREATE ACTION get_users() public view returns table (name text, address text) {
  return select name, address from users;
}