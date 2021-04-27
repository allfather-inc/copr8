import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'

const UserForm = () => (
  <form>
    <div tw='mb-1 sm:mb-2'>
      <label htmlFor='city' tw='inline-block mb-1 font-medium'>
        City
      </label>
      <input
        placeholder='Bangalore'
        required
        type='text'
        tw='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
        id='city'
        name='city'
      />
    </div>
    <div tw='mb-1 sm:mb-2'>
      <label htmlFor='locality' tw='inline-block mb-1 font-medium'>
        Locality
      </label>
      <input
        placeholder='HSR Layout'
        required
        type='text'
        tw='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
        id='locality'
        name='locality'
      />
    </div>
    <div tw='mb-1 sm:mb-2'>
      <label htmlFor='email' tw='inline-block mb-1 font-medium'>
        Resource type
      </label>
      <input
        placeholder='john.doe@example.org'
        required
        type='text'
        tw='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
        id='resource'
        name='resource'
      />
    </div>
    <div tw='mt-4 mb-2 sm:mb-4 space-y-2'>
      <button
        type='submit'
        tw='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
      >
        Search for resource
      </button>
      <button
        type='submit'
        tw='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
      >
        Add a resource
      </button>
    </div>
  </form>
)

const UserCard = () => (
  <div tw='w-full max-w-xl xl:px-8 xl:w-5/12'>
    <div tw='bg-white rounded shadow-2xl p-7 sm:p-10'>
      <h3 tw='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
        Help someone today
      </h3>
      <UserForm />
    </div>
  </div>
)

export const Home = () => {
  return (
    <div tw='relative'>
      <img
        src='https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
        tw='absolute inset-0 object-cover w-full h-full'
        alt=''
      />
      <div tw='relative bg-gray-900 bg-opacity-75'>
        <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div tw='flex flex-col items-center justify-between xl:flex-row'>
            <div tw='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
              <h2 tw='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                Find <span tw='text-teal-accent-400'>Covid-19</span> resources
                near you!
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
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
