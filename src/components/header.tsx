/* eslint-disable camelcase */
"use client";
import { Saira_Stencil_One } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CartControl from "./CartCount";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../hooks/Reduxhooks";
import { setFilter } from "../redux/features/productSlice";
import {
  StyledHeaderContainer,
  StyledLogoContainer,
  StyledNavContainer,
  SearchInputContainer,
  StyledSearchInput,
} from "../styles/HeaderStyles";

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});
export default function HeaderComponent() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(setFilter(e.target.value));
  };
  return (
    <StyledHeaderContainer role="banner">
      <StyledLogoContainer className={sairaStencil.className}>
        Capputeeno
      </StyledLogoContainer>
      <StyledNavContainer>
        <SearchInputContainer role="search">
          <StyledSearchInput
            placeholder="Procurando por algo específico?"
            value={inputValue}
            onChange={handleChange}
            aria-label="Search"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#737380" }}
            aria-hidden="true"
          />
        </SearchInputContainer>
        <CartControl />
      </StyledNavContainer>
    </StyledHeaderContainer>
  );
}
