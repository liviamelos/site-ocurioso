import styled, { css } from "styled-components";

export const ButtonCloseStyled = styled.button`
  width: auto; height: 36px;
  padding: 10px 8px;

  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;

  transition: .5s ease-out;

  gap: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;


  @media screen and (min-width: 1000px) {
    width: auto; height: 40px;
    padding: 10px 15px;
  }

  ${({color}) => {
    switch (color) {
      case 'green':
        return css`
          background-color: ${({theme}) => theme.color.primaryGreen};
          color: ${({theme}) => theme.color.primaryGreyLight};

          :hover{
            background-color: ${({theme}) => theme.color.secondarybuttonhovergreen};
          }
        `;
      default:
        return css`
          background-color: ${({theme}) => theme.color.primaryRed};
          color: ${({theme}) => theme.color.primaryGreyLight};
          
          :hover{
            background-color: ${({theme}) => theme.color.secondarybuttonhoverred};
          }
        `;
    }
  }}
`;

export const ButtonOpenStyled = styled.button`
  width: auto; height: 36px;
  margin-right: 20px;

  background: none;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;

  gap: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  ${({color}) => {
    switch (color) {
      case 'blue':
        return css`
          color: ${({theme}) => theme.color.primaryCyan};
        `;
      default:
        return css`
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
    }
  }}
`;

export const ButtonRedHeart = styled.button`
  color: pink;
  animation: like 1s ;
  animation-fill-mode: both;
  background-color: transparent;
  font-size: 15px;

  @keyframes like {
    0%{
      color: pink;
      transform: scale(0.8)
    }
    50%{
      color: purple;
      transform: scale(1.8)
    }
    100%{
      color: pink;
      transform: scale(1.4)
    }
    
  }
`
export const ButtonBlackHeart = styled.button`
  color: red;
  animation: deslike 1s ;
  animation-fill-mode: both;
  background-color: transparent;
  font-size: 15px;

  @keyframes deslike {
    0%{
      color: pink;
      transform: scale(0.8)
    }
    50%{
      color: purple;
      transform: scale(1.8)
    }
    100%{
      color: pink;
      transform: scale(1.4)
    }
    
  }
`

export const ButtonLoginStyled = styled.button`
  width: 100%; height: 36px;

  border-radius: 12px;

  font-weight: 700;
  font-size: 14px;

  transition: .5s ease-out;

  background-color: ${({theme}) => theme.color.primaryGreen};
  color: ${({theme}) => theme.color.primaryGreyLight};

  :hover{
    background-color: ${({theme}) => theme.color.secondarybuttonhovergreen};
  }
  @media screen and (min-width: 1000px) {
    width: 100%; height: 40px; 
  }
`;

export const ButtonRegisterStyled = styled.button`
  width: 100%; height: 36px;
  
  border-radius: 12px;
  
  transition: .5s ease-out;

  font-weight: 700;
  font-size: 14px;
  background-color: ${({theme}) => theme.color.primaryRed};
  color: ${({theme}) => theme.color.primaryGreyLight};

  :hover{
    background-color: ${({theme}) => theme.color.secondarybuttonhoverred};
  }
  @media screen and (min-width: 1000px) {
    width: 100%; height: 40px;
  }
`;

export const ButtonModalCloseStyled = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  color: ${({theme}) => theme.color.primaryGreyDark};
  font-size: 20px;
  font-weight: 100;

  z-index: 1;
  position: absolute;
  right: 15px; top: 10px;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    position: absolute;

    right: 15px; top: 10px;
  }
`

export const ButtonRecord = styled.button`
  width: 100%; height: 36px;
  
  border-radius: 12px;
  
  transition: .5s ease-out;

  background-color: ${({theme}) => theme.color.primaryRed};
  color: ${({theme}) => theme.color.primaryGreyLight};

  :hover{
    background-color: ${({theme}) => theme.color.secondarybuttonhoverred};
  }
  @media screen and (min-width: 1000px) {
    width: 100%; height: 40px;
  }
`

export const ButtonSearch = styled.button`
  width: 100%; height: 36px;
  border-radius: 12px;
  transition: .5s ease-out;

  background-color: ${({theme}) => theme.color.primaryGreen};
  color: ${({theme}) => theme.color.primaryGreyLight};

  :hover{
    background-color: ${({theme}) => theme.color.secondarybuttonhovergreen};
  }
  @media screen and (min-width: 1000px) {
    width: 100%; height: 40px;
  }
`