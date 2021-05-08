// @flow
import React, { useState } from 'react'


import tw, { styled, css, theme } from 'twin.macro'
import { Hero, AddResourcesHero, ShowResourcesCard } from '../Hero'


const Home = ({ isLoading, selectedOptions, setSelectedOptions, onChange, onSearch }) => {
  const [isAddSectionEnabled, setIsAddSectionEnabled] = useState(true)
  const isHomePage = false;
  return (
    <div tw='relative'>
        <img
        src='https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
        tw='absolute inset-0 object-cover w-full h-full'
        alt=''
      />
      <div tw='relative bg-white bg-opacity-100'>
        <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <ShowResourcesCard/>
        </div>
      </div>
    </div>
  )
}

export default Home
