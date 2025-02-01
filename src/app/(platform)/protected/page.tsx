import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const ProtectedPage = async () => {
  const user = await currentUser();
  if (!user) {
    return <div>No user found</div>;
  }

  const userId = user.id;
  return (
    <div>
      User: {user.firstName} UserId: {userId}
    </div>
  );
};

export default ProtectedPage;
