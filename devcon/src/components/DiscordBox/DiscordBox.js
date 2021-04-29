import React from "react";

import { Box } from "./DiscordBox.styles";
import DiscordLogo from "../../images/discord-logo.svg";

const DiscordBox = () => {
  return (
    <Box onClick={() => window.open("https://discord.gg/8khTrtWWBT")}>
      <h1>JOIN OUR DISCORD</h1>
      <h3>Stay updated with latest information</h3>
      <img src={DiscordLogo} alt="Discord" className="discord-logo" />
    </Box>
  );
};

export default DiscordBox;
