import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Episode = {
  Table: styled.table`
    inline-size: 100%;
    block-size: fit-content;
    margin:0;
    padding:0;
    background:none;
    border:none;
    border-collapse:collapse;
    border-spacing:0;
    background-image:none;
  `,

  TableHeader: styled.thead`
    border-block-end: 1px solid red;

    th {
      padding: 0.5rem;
      border-bottom: 1px solid var(--color-main);
    }
  `,

  TableHeaderTitle: styled.th`
    inline-size: 60%;
    text-align: left;
  `,

  TableHeaderCol: styled.th``,

  TableRow: styled.tr`
    transition: background .3s ease-in-out, color .3s ease-in-out;

    &:nth-child(even) {
      background: var(--episode-table-row, var(--color-main-010));
    }

    &:hover {
      color: white;
      background: var(--color-main-040);

      a {
      color: white;
      }
    }
  `,

  TableCol: styled.td`
      padding: 0.5rem;
  `,

  TableColTitle: styled.td`
    text-align: left;
    padding: 0.75rem 0.5rem 0.75rem 1rem;
  `,

  TableColDate: styled.td`
    text-align: center;
    padding: 0.75rem 0.5rem;
  `,

  TableColTime: styled.td`
    text-align: center;
    padding: 0.75rem 0.5rem;
  `,

  TitleLink : styled(Link)`
    color: var(--color-main);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `
}