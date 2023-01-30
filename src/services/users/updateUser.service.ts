import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest, IUserUpdate } from "../../interfaces/users";

const updateUserService = async ({
  id,
  name,
  email,
  isAdm,
  password,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);
  if (!account) {
    throw new Error("User not Found");
  }
  let updatedAt = new Date().toISOString();
  await userRepository.update(account!.id, {
    name: name,
    password: password,
    email: email,
    isAdm: isAdm,
    updatedAt: updatedAt,
  });

  return { name: name, email: email, isAdm: isAdm };
};

export default updateUserService;
