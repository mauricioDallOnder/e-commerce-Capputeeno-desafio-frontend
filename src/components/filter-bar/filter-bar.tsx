import { useState } from "react";
import { ActiveBar, ButtonContainer, StyledButton, ProductFilterBar, DropDownMenu} from "./filter-barStyle";
import React from "react";

export function FilterBar() {
    const [selectedButton, setSelectedButton] = useState("");
    return (
      <ProductFilterBar>
        <div style={{display:'flex',gap:'40px'}}>
          {['todos os produtos', 'camisetas', 'canecas'].map((button) => (
            <ButtonContainer key={button}>
              <StyledButton
                onClick={() => setSelectedButton(button)}
                selected={selectedButton === button}
              >
                {button}
              </StyledButton>
              {selectedButton === button && <ActiveBar />}
            </ButtonContainer>
          ))}
        </div>
        <DropDownMenu>
        <option>organizar por</option>
          <option>Novidades</option>
          <option>Preço: Maior - menor</option>
          <option>Preço: Menor - maior</option>
          <option>Mais Vendidos</option>
        </DropDownMenu>
      </ProductFilterBar>
    );
  }
