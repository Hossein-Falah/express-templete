import config from "./configs/config";
import { CreateApplication } from "./index";

const PORT: number = +config.PORT;
const MODE: string = config.MODE

new CreateApplication(PORT, MODE);