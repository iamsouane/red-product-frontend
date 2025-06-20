import styled from 'styled-components';

// ✅ Label - Texte gris léger, espacement top
export const Label = styled.label`
  font-size: 17.07px; /* selon Figma */
  line-height: 25.6px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 20px;
  display: block;
`;

// ✅ Input - Ligne bas uniquement avec couleur Figma
export const Input = styled.input`
  width: 320px;
  height: 45px;
  border: none;
  border-bottom: 1.33px solid rgba(160, 160, 160, 0.2); /* #A0A0A033 */
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  padding: 0 8px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-bottom: 1.33px solid #FFD964; /* optionnel : couleur focus */
  }
`;

// ✅ Checkbox - Carré custom selon design
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 2.66667px solid #9E9E9E;
  border-radius: 2.66667px;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 10px;
  position: relative;

  &:checked::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 7px;
    width: 6px;
    height: 12px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

// ✅ Bouton de connexion
export const SignInButton = styled.button`
  background: #45484B;
  color: #fff;
  width: 100%;
  padding: 15px;
  font-size: 21px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;