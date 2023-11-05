import { app } from "./app.js"
import { AleatoryEmailComponent } from "./components/aleatory-email-component.js";
import { CustomEmailComponent } from "./components/custom-email-components.js";
import { HumanEmailComponent } from "./components/human-email-component.js";

addEventListener("DOMContentLoaded", async (e) => {
    await app();
})