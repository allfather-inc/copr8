// @flow
import React, { useState } from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import Select from 'react-select'
import selectTheme from '../../utils/styles/SelectStyles'

const FormButton = styled.button(({ variant = 'primary' }) => [
  tw`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none`,
  variant === 'primary'
    ? tw`text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700`
    : tw`text-black bg-white border border-gray-400 hover:border-gray-700`
])
const UserForm = ({
  setSelectedOptions,
  onAdd,
  showSearch = true,
  onSearch
}) => (
  <div tw='flex flex-col space-y-8' onSubmit={onSearch}>
    <div tw='flex flex-col space-y-4'>
      <div tw=''>
        <label htmlFor='city' tw='inline-block mb-1 font-medium'>
          City
        </label>
        <Select
          isMulti={false}
          options={[
            {
              value: 1,
              label: 'Bengaluru'
            },
            {
              value: 2,
              label: 'Mumbai'
            },
            {
              value: 3,
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
              value: 1,
              label: 'HSR Layout'
            },
            {
              value: 2,
              label: 'Indiranagar'
            },
            {
              value: 3,
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
              value: 1,
              label: 'Beds'
            },
            {
              value: 2,
              label: 'Oxygen'
            },
            {
              value: 3,
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
      {showSearch ? <FormButton onClick={onSearch}>Search</FormButton> : null}
      <FormButton variant={!showSearch && 'primary'} onClick={onAdd}>
        Add a resource
      </FormButton>
    </div>
  </div>
)

export default UserForm
