import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = {
  Container: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    block-size: 4.5rem;
    padding-inline: 1rem;
    margin-block-end: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `,

  Title: styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 0;
  `,

  Link: styled(Link)`
    color: var(--header-link-color, var(--color-main));
    text-decoration: var(--header-link-text-decoration, none);
    transition: color .2s ease-in-out;

    &:hover {
      --header-link-color: var(--color-link-hover)
    }
  `,

  Loading : styled.p `
    font-size: 0.75rem;
  `,
}