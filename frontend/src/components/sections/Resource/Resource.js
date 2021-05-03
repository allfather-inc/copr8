import React from 'react';
import tw, { styled, css, theme } from 'twin.macro'
import Map from './Map'
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
                width='48'
                height='48'
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
        <p tw='font-semibold ml-1'>{count}</p>
    </a>
)
const ResourceTemplate = ({
    statName = '',
    data = ''
}) => (
    <div tw='flex flex-col'>
        <div tw='rounded-lg p-0 sm:p-0 hover:shadow-2xl'>
            <h1 tw='px-5 py-2 text-xl font-bold text-teal-500' >
                {statName}
            </h1>
            {statName === 'Provider Information' && (
                <p tw='text-xl px-5 py-4  sm:text-left text-teal-500 '>Name : {data}<br />Contact: {'9559324106'}<br />Email: {'krnshiv@gmail.com'}  </p>
            )}
            {statName === 'Location' && (
                <p><p tw='text-xl px-5 py-4  sm:text-left text-teal-500 '> {data}</p>
                    <Map
                        location={{
                            address: `${data}`,
                            lat: 12.911755,
                            lng: 77.633473
                        }}
                        zoomLevel={20}
                    />
                </p>
            )}
            {statName === 'Resource Type' && (
                <p tw='text-xl px-5 py-4  sm:text-left text-teal-500 '>
                    Type : {data}<br />
                Qty: {'9559324106'}<br />
                </p>
            )}

        </div>
    </div>
)

const InformationSection = ({ name = 'Karan shiv', contact = '+919559324106', details = 'oxygen cylinder', location = '1110 Shivashakti, Sector-7, 6th Main, HSR layout' }) => (

    <>
        <ResourceTemplate
            statName={'Provider Information'}
            data={name}
        />
        <ResourceTemplate
            statName={'Resource Type'}
            data={details}
        />
        <ResourceTemplate
            statName={'Location'}
            data={location}
        />
    </>
);


const ShowResources = ({ selectedOptions, setSelectedOptions, onAdd, resource = {} }) => (
    <div tw='flex flex-col'>
        <div tw='rounded py-5'>
            <h3 tw='mb-12 text-xl font-bold sm:text-left text-teal-accent-700 sm:mb-12 sm:text-2xl'>Resource Information</h3>
            <Upvotes count={700} />
            <br /><hr /><br />
            <InformationSection />
        </div>
    </div>
)
export default ShowResources;
