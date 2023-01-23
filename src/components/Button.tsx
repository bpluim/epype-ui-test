import styled from 'styled-components'

export interface ButtonProps {
  primary?: boolean
}

export const Button = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "" : "white"};
  color: ${props => props.primary ? "white" : ""};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ;
  border-radius: 3px;
`;