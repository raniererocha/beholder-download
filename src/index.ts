import Application from "./drivers/Application";
import { settings } from "./settings";

const application = new Application(settings)

application.watch()
