import React, { useContext } from "react";
import { DashContext } from "../../providers/DashContext";
import { ModalContext } from "../../providers/ModalContext";
import { IconHeart } from "../Buttons";

import { IMGModalHomePageStyled, StyledModalHome } from "./style";

export const ModalHome = () => {
  const { openModalDash, setModalDash, Post } = useContext(ModalContext);
  const { addPostToFavorit } = useContext(DashContext);

  if (openModalDash) {
    return (
    
      <StyledModalHome>
        <IMGModalHomePageStyled src={Post.src.replace("Img:", "")} alt="" />
        <button onClick={() => setModalDash(false)}>X</button>
        <>
          <h3>{Post.title}</h3>
          <p>{Post.description}</p>
          <p>{Post.content}</p>
          <div>
            <span>{Post.category}</span>
            {/* <IconHeart Post={Post} /> */}
          </div>
        </>
      </StyledModalHome>

    );
  }

  return null;
};
