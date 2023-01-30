import { User } from "../../entities/user.entity";
import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { IUserRequest, IUser } from "../../interfaces/users";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(password, 10);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  if (!password) {
    throw new Error("Password is a required field");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = hashedPassword;
  user.isAdm = isAdm;
  user.isActive = true;
  user.createdAt = new Date().toISOString();
  user.updatedAt = new Date().toISOString();

  userRepository.create(user);
  await userRepository.save(user);
  const selectedUser = await userRepository.findOneBy({ id: user.id });

  return selectedUser;
};

export default createUserService;
