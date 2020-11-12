import React from 'react'

interface PaginationProps {
    postsPerPage: number
    totalPosts: number
}

const Pagination = ({postsPerPage, totalPosts}: PaginationProps) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {pageNumbers.map(number => (
                <div>
                    {number}
                </div>
            ))}
        </div>
    )
}

export default Pagination