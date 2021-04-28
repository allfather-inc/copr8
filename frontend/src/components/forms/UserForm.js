// @flow
import React, { useState } from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import Select from 'react-select'
import selectTheme from '../../utils/styles/SelectStyles'

const UserForm = ({ setSelectedOptions, onAdd }) => (
  <form tw='flex flex-col space-y-8'>
    <div tw='flex flex-col space-y-4'>
      <div tw=''>
        <label htmlFor='city' tw='inline-block mb-1 font-medium'>
          City
        </label>
        <Select
          isMulti={false}
          options={[
            {
              value: 'Bengaluru',
              label: 'Bengaluru'
            },
            {
              value: 'Mumbai',
              label: 'Mumbai'
            },
            {
              value: 'Delhi',
              label: 'Delhi'
            }
          ]}
          onChange={event => setSelectedOptions('city', event)}
          theme={selectTheme}
          tw='flex-grow w-full transition duration-200 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div tw=''>
        <label htmlFor='locality' tw='inline-block mb-1 font-medium'>
          Locality
        </label>
        <Select
          isMulti
          options={[
            {
              value: 'HSR Layout',
              label: 'HSR Layout'
            },
            {
              value: 'Indiranagar',
              label: 'Indiranagar'
            },
            {
              value: 'Kormanagala',
              label: 'Kormanagala'
            }
          ]}
          onChange={event => setSelectedOptions('locality', event)}
          theme={selectTheme}
          tw='flex-grow w-full transition duration-200 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
      <div tw=''>
        <label htmlFor='email' tw='inline-block mb-1 font-medium'>
          Resource type
        </label>
        <Select
          isMulti
          options={[
            {
              value: 'Beds',
              label: 'Beds'
            },
            {
              value: 'Oxygen',
              label: 'Oxygen'
            },
            {
              value: 'Remdesivir',
              label: 'Remdesivir'
            }
          ]}
          onChange={event => setSelectedOptions('resource', event)}
          theme={selectTheme}
          tw='flex-grow w-full transition duration-200 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline'
        />
      </div>
    </div>
    <div tw='flex flex-col mb-2 sm:mb-4 space-y-4'>
      <button
        type='submit'
        tw='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
      >
        Search
      </button>
      <button
        type='submit'
        tw='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-white border border-gray-700 hover:border-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
        onClick={onAdd}
      >
        Add a resource
      </button>
    </div>
  </form>
)



export default UserForm
