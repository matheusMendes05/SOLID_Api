import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailTrapMailProvider();
const postgresUserRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }