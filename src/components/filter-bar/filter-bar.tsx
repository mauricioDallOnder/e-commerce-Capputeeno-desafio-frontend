import { useState } from "react";
import { ActiveBar, ButtonContainer, StyledButton, ProductFilterBar } from "./filterBarStyle";
import React from "react";
import { useAppDispatch } from "../../../hooks/Reduxhooks";
import { setFilterCategory } from "@/redux/features/productSlice";
import { DropDownMenu } from "./dropdown-filter";

export function FilterBar() {
  const [selectedButton, setSelectedButton] = useState("");
  const dispatch = useAppDispatch();

  const handleClick = (category: string, button: string) => {
    setSelectedButton(button);
    dispatch(setFilterCategory(category));
  };

  return (
    <ProductFilterBar>
      <div style={{ display: 'flex', gap: '40px' }}>
        {[
          { label: 'todos os produtos', category: 'all' },
          { label: 'camisetas', category: 't-shirts' },
          { label: 'canecas', category: 'mugs' }
        ].map((button) => (
          <ButtonContainer key={button.label}>
            <StyledButton
              onClick={() => handleClick(button.category, button.label)}
              selected={selectedButton === button.label}
            >
              {button.label}
            </StyledButton>
            {selectedButton === button.label && <ActiveBar />}
          </ButtonContainer>
        ))}
      </div>
      <DropDownMenu />
    </ProductFilterBar>
  );
}
