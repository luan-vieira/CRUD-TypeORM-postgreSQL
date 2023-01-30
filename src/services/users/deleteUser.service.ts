import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userDeleted = await userRepository.findOneBy({ id: id });

  if (!userDeleted) {
    throw new Error("User not Found");
  } else {
    await userRepository.remove(userDeleted);
    return { message: `${userDeleted.name} has been deleted` };
  }
};

export default deleteUserService;
