export type UserEntity = {
  id: string;
  name: string;
  acceptedTerms: boolean;
};

export function saveUser(userId: string) {
  if (!userId) return;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const userExists = users.some((user: UserEntity) => user.id === userId);
  if (!userExists) {
    users.push({
      id: userId,
      name: `User ${userId}`,
      acceptedTerms: true,
    });

    localStorage.setItem("users", JSON.stringify(users));
  }
}
