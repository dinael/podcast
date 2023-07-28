import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = {
  Container : styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    gap: 3rem 1rem;
    width: 100%;
    padding: 3.5rem 0;
    margin: 0;
    border-block-start: 0.0625rem solid hsl(0, 0%, 90%);
  `,

  Item : styled.li`
    display: flex;
  `,

  SearchRegion : styled.div`
    padding-block-end: 1rem;
  `,

  SearchResultLength : styled.p`
    display: grid;
    place-items: center;
    font-size: 0.75rem;
    block-size: 1.25rem;
    inline-size: fit-content;
    min-inline-size: 1.25rem;
    padding: 0 0.75ch;
    margin-left: auto;
    border-radius: 10ch;
    color: white;
    background: var(--color-main);
  `,
}