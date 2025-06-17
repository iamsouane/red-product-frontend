import styled from 'styled-components';

export const Label = styled.label`
  font-size: 18px;
  opacity: 0.5;
  margin-top: 20px;
  display: block;
  color: rgba(0, 0, 0, 0.87);
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  margin-bottom: 20px;
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
  outline: none;
`;

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
`;