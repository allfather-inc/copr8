import React from 'react'
import tw from 'twin.macro'

const Badge = ({ text }) => (
  <div>
    <p tw='inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
      {text}
    </p>
  </div>
)

const Upvotes = ({ count }) => (
  <a
    href='/'
    aria-label='Likes'
    className='group'
    tw='flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700'
  >
    <div className='mr-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        tw='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
      >
        <polyline
          points='6 23 1 23 1 12 6 12'
          fill='none'
          strokeMiterlimit='10'
        />
        <path
          d='M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z'
          fill='none'
          stroke='currentColor'
          strokeMiterlimit='10'
        />
      </svg>
    </div>
    <p tw='font-semibold ml-1'>{count}K</p>
  </a>
)

const ResourceCard = () => {
  return (
    <div tw='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:p-4'>
      <div tw='p-8 rounded shadow-xl sm:p-16'>
        <div tw='flex flex-col lg:flex-row'>
          <div tw='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
            <div tw='flex space-x-2'>
              <Badge text='Bangalore' />
              <Badge text='Twitter' />
            </div>
            <div tw='lg:space-y-4 mb-2'>
              <h2 tw='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                Bed availability in
                <span tw='inline-block text-deep-purple-accent-400'>
                  HSR Layout
                </span>
              </h2>
              <p className='text-gray-600'>By John Doe on 27th April, 2021</p>
            </div>

            <Upvotes count='100' />
          </div>
          <div tw='lg:w-1/2'>
            <div>
              <label tw='inline-block mb-1 font-medium transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
                Description
              </label>
              <p tw='mb-4 text-base text-gray-700'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
              <a
                href='/'
                aria-label=''
                tw='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                Resource link
              </a>
            </div>

            <button
              type='submit'
              tw='flex mt-4 ml-auto lg:mt-0 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Blog = () => {
  return (
    <div tw='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
      <div tw='p-8'>
        <h2 tw='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
          Resources near you
        </h2>
        <form tw='flex flex-col items-center w-full mb-4 md:flex-row'>
          <input
            placeholder='City'
            required=''
            type='text'
            tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
          />
          <input
            placeholder='Locality'
            required=''
            type='text'
            tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
          />
          <input
            placeholder='Resource type'
            required=''
            type='text'
            tw='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
          />
          <button
            type='submit'
            tw='mt-4 lg:mt-0 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
          >
            Search
          </button>
        </form>
      </div>

      <div tw='mb-10 border-t border-b divide-y'>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
      <div tw='text-center'>
        <a
          href='/'
          aria-label=''
          tw='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
        >
          See more
          <svg
            tw='inline-block w-3 ml-2'
            fill='currentColor'
            viewBox='0 0 12 12'
          >
            <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Blog
