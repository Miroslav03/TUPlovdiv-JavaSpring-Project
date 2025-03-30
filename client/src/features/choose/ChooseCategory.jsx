import React from 'react'
import CategoryCard from '../home/components/CategoryCard'

export default function ChooseCategory() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-y-[1rem] gap-x-[2rem] sm:grid-cols-1 sm:grid-rows-1 sm:h-[100%]">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
  )
}
