import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getSelg = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      externaluserId: self.id,
    },
  });

  if (!user) {
    throw new Error("Not found");
  }
  return user;
};
