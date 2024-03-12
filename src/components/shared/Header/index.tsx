"use client";

import React from "react";
import FitbodLogo from "../../../../assets/FitbodLogo.svg";
import Image from "next/image";
import { HeaderContainer } from "../sharedComponents.styled";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link href="/" test-id="app-logo">
        <Image src={FitbodLogo} alt="fitbod logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
