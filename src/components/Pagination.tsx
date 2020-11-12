import React from 'react'

interface PaginationProps {
    postsPerPage: number
    totalPosts: number
    paginate(number: number): any
}

const Pagination = ({postsPerPage, totalPosts, paginate}: PaginationProps) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {pageNumbers.map((number, i) => (
                <div key={i} onClick={() => paginate(number)}>
                    {number}
                </div>
            ))}
        </div>
    )
}

export default Pagination