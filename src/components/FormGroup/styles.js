import { styled } from 'styled-components';

export const Container = styled.form`
  & + & {
    margin-top: 16px;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    margin-top: 8px;
    display: block;
  }
`;
