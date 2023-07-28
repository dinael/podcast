import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Detail = {
  Container : styled.article`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 2fr;
    padding-block-end: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,

  GoBack: styled(Link)`
  `,
}
