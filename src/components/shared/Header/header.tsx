"use client";

import React from "react";
import FitbodLogo from "../../../../assets/FitbodLogo.svg";
import Image from "next/image";
import { HeaderContainer } from "./header.styledComponents";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image src={FitbodLogo} alt="fitbod logo" />
    </HeaderContainer>
  );
};

export default Header;
