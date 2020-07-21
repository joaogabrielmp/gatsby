import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'

import * as S from './styles'

const Pagination = ({
  currentPage,
  isFirst,
  isLast,
  nextPage,
  numPages,
  prevPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>← página anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPage}>proxima página →</Link>}
  </S.PaginationWrapper>
)

Pagination.defaultProps = {
  nextPage: '',
  prevPage: '',
}

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  nextPage: propTypes.string,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
}

export default Pagination
