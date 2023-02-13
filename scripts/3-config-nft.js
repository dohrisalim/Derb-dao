import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xEcBAfd0C5d7df44BaDBeB9C3a973f9535E3af8A4", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Derb Coin",
        description: "This NFT will give you access to DerbDAO!",
        image: readFileSync("scripts/assets/coin.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
