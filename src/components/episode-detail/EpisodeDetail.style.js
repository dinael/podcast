import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Detail = {
  Container: styled.section`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 2fr;
    padding-block-end: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,

  Header: styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 1/2;
  `,

  Cover: styled.img`
    max-block-size: 17.5rem;;
    inline-size: auto;
    order: -1;
    margin-block-end: 1rem;
  `,

  Player: styled.audio`
    inline-size: 100%;
    margin-block-end: 1rem;
  `,

  Title: styled.h2`
    margin: 0;
    padding: 0 0 1rem 0;
  `,

  SubTitle: styled.p`
    font-size: 1.75;
    margin: 0;
    padding: 0 0 1rem 0;
  `,

  Breadcrumb: styled.nav`
    display: flex;
    align-items: center;
    block-size: 3rem;
    margin-block-end: 2rem;
    border-block-end: 0.0625rem solid rgba(0, 0, 0, 0.1);
    gap: 1rem;
  `,

  BreadcrumbCurrent: styled.span`
    color: var(--color-main-040);
  `,

  GoBack : styled(Link)`
    color: var(--podcast-detail-link-color, var(--color-main));
    text-decoration: var(--podcast-detail-link-text-decoration, none);
    transition: all .3s ease-in-out;

    &:hover {
      --podcast-detail-link-color: var(--color-link-hover);
      --podcast-detail-link-text-decoration: underline;
    }
  `,
}