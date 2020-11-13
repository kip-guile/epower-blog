import React from 'react'
import { Box, Button } from '@chakra-ui/core'

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  paginate(number: number): any
  currentPage: number
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage
}: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Box display="flex" width={{ md: '100%' }} justifyContent="center" mt={10}>
        <Button
          borderRadius={{ md: 10 }}
          textAlign="center"
          w={{ md: '6rem' }}
          backgroundColor="#5678"
          color="#ffff"
          p={2}
          ml={5}
          isDisabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          borderRadius={{ md: 10 }}
          textAlign="center"
          w={{ md: '6rem' }}
          backgroundColor="#5678"
          color="#ffff"
          p={2}
          ml={5}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </Button>
    </Box>
  )
}

export default Pagination
