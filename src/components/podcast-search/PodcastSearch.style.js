import styled from 'styled-components'

export const Search = {
  Container: styled.label`
    display:grid;
    padding-block-start: 1rem;
  `,

  Label: styled.span`
    display: flex;
    flex: 1 0 100%;
    padding-block-end: 0.25rem;
  `,

  Input: styled.input`
    display: flex;
    padding: 0.75rem 0.5rem;
    border: 0;
    border-block-end: 1px solid var(--color-main);
  `
}