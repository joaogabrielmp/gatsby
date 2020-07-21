import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import propTypes from 'prop-types'

import getThemeColor from '../../utils/getThemeColor'

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
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        ← página anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
      >
        proxima página →
      </AniLink>
    )}
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
