import styled from 'styled-components'

export const Header = {
  Container : styled.header`
    display: grid;
    gap: 1rem 0;
    place-content: start;
    justify-content: center;
  `,

  Title : styled.h2`
    margin: 0;
    padding: 0;
  `,

  Cover: styled.img`
    display: block;
    max-block-size: 12.5rem;
    inline-size: auto;
    margin-inline: auto;
    order: -1;
    margin-block-end: 1rem;

    transition: border-radius .5s ease-in-out;
  `,

  DetailList : styled.dl`
    margin: 0;
    padding: 0;
    display: grid;
    flex: 1 0 100%;
    inline-size: 100%;
    text-align: left;

    dt {
      margin: 0;
      padding: 0;
      font-weight: 600;
    }

    dd {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: 400;
    }
  `,

  Author : styled.address`
    margin: 0;
    padding: 0;
  `,
}