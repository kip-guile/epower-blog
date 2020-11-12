import React from 'react'
import { Box } from '@chakra-ui/core'

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  paginate(number: number): any
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate
}: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Box display={{ md: 'flex' }} width={{md: '100%'}} justifyContent={{md: 'center'}} mt={10}>
      {pageNumbers.map((number, i) => (
        <Box cursor='pointer' borderRadius={{md: 10}} textAlign='center' w={{md: '6rem'}} backgroundColor='#5678' p={2} ml={5} key={i} onClick={() => paginate(number)}>
          {number}
        </Box>
      ))}
    </Box>
  )
}

export default Pagination
