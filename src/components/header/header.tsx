"use client";
import { InputContainer, TagHeader, TagLogo, TagSearchBar } from "./headerStyle";
import { Saira_Stencil_One } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CartControl from './cartControl'

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});
export default function HeaderComponent() {
  
  return (
    <TagHeader>
      <TagLogo className={sairaStencil.className}>Capputeeno</TagLogo>
      <div style={{display:'flex',alignItems:'center',gap:'28px'}}>
      <InputContainer>
        <TagSearchBar placeholder="Procurando por algo específico?" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#737380" }}
        />
        </InputContainer>
       <CartControl/>
      </div>
    </TagHeader>
  );
}
//fa-light fa-bag-shopping
