// @flow
import React from 'react'

type Props = {
  currentPage: number,
  itemsOnCurrentPage: number,
  itemsPerPage: number,
  totalCount: number,
}

const ResultsCount = ({ currentPage, itemsOnCurrentPage, itemsPerPage, totalCount }: Props) => {
  if (!currentPage || !itemsOnCurrentPage || !itemsPerPage || !totalCount) {
    return <div />
  }

  let lowerLimit = ((currentPage - 1) * itemsPerPage) + 1
  let upperLimit = (lowerLimit - 1) + itemsOnCurrentPage

  // edge case with no results
  if (totalCount === 0) {
    lowerLimit = 0
    upperLimit = 0
  }

  return <div>{`${lowerLimit}-${upperLimit} of ${totalCount} results`}</div>
}

export default ResultsCount
