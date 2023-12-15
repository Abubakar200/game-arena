import { db } from "./db";

export const getRecommended = async () => {
  const user = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return user;
};
