import React, { useState } from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import { UserForm } from '../forms'

const Hero = ({ selectedOptions, setSelectedOptions, onAdd }) => {
  return (
    <div tw='flex flex-col items-center justify-between xl:flex-row'>
      <div tw='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
        <h2 tw='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
          Find <span tw='text-teal-accent-400'>Covid-19</span> resources near
          you!
        </h2>
        <p tw='max-w-xl text-base text-gray-400 md:text-lg'>
          Verify if the resource is helpful.
        </p>
        <p tw='max-w-xl mb-4 text-base text-gray-400 md:text-lg'>
          Add a new resource, it could save a life.
        </p>
        <a
          href='/'
          aria-label=''
          tw='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700'
        >
          Learn more
          <svg
            tw='inline-block w-3 ml-2'
            fill='currentColor'
            viewBox='0 0 12 12'
          >
            <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
          </svg>
        </a>
      </div>
      <UserCard
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        onAdd={onAdd}
      />
    </div>
  )
}

const UserCard = ({ selectedOptions, setSelectedOptions, onAdd }) => (
  <div tw='w-full max-w-xl xl:px-8 xl:w-5/12'>
    <div tw='bg-white rounded shadow-2xl p-7 sm:p-10'>
      <h3 tw='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
        Help someone today
      </h3>
      <UserForm
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        onAdd={onAdd}
      />
    </div>
  </div>
)

const AddResourcesCard = ({ selectedOptions, setSelectedOptions, onAdd }) => (
  <div tw='w-full max-w-2xl'>
    <div tw='bg-white rounded shadow-2xl p-7 sm:p-10'>
      <h3 tw='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
        Help someone today
      </h3>
      <UserForm
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        onAdd={onAdd}
      />
    </div>
  </div>
)
const AddResourcesHero = ({ selectedOptions, setSelectedOptions }) => {
  return (
    <div tw='flex flex-row items-center justify-between '>
      <div tw='w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-9/12 mx-auto'>
        <h2 tw='max-w-2xl mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-center'>
          Add <span tw='text-teal-accent-400'>Covid-19</span> resources!
        </h2>
        <AddResourcesCard
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
    </div>
  )
}

export { Hero, AddResourcesHero }
