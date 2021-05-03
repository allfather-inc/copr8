// @flow
import React, { useState } from 'react'


import {  useLocation, useHistory } from 'react-router-dom'

import Blog from './List'
import ResourceHeader  from '../components/sections/Resource/ResourceHeader'
import ResourceLanding  from '../components/sections/Resource/ResourceLanding'
import ResourceFooter  from '../components/sections/Resource/ResourceFooter'

const scrollToList = () => {
  const section = document.querySelector('#resourceList')
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const addQuery = ({ key, value, location, history }) => {
  let pathname = location.pathname
  // returns path: '/app/books'
  let searchParams = new URLSearchParams(location.search)
  // returns the existing query string: '?type=fiction&author=fahid'
  searchParams.set(key, value)
  history.push({
    pathname: pathname,
    search: searchParams.toString()
  })
}

const searchResources = ({ selectedOptions, setIsLoading, setResources }) => {
  fetch(
    `/api/v1/resources/?city=${selectedOptions.city}&locality=${selectedOptions.locality}&resourceType=${selectedOptions.resource}`
  )
    .then(response => {
      setIsLoading(false)
      return response.json()
    })
    .then(data => {
      setResources(data)
      setIsLoading(false)
      scrollToList()
    })

  setIsLoading(true)
}

const onChange = ({
  key,
  event,
  selectedOptions,
  setSelectedOptions,
  location,
  history
}) => {
  const values =
    event instanceof Array ? event.map(option => option.value) : [event.value]
  const value = values.join(',')

  addQuery({ key, value, location, history })
  setSelectedOptions({ ...selectedOptions, [key]: value })
}

const ResourcePage = () => {
  const [selectedOptions, setSelectedOptions] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [resources, setResources] = useState([])

  const location = useLocation()
  const history = useHistory()

  return (
    <>
      <ResourceHeader />
      <ResourceLanding
        isLoading={isLoading}
        selectedOptions={selectedOptions}
        setSelectedOptions={(key, event) =>
          onChange({
            key,
            event,
            selectedOptions,
            setSelectedOptions,
            location,
            history
          })
        }
        onSearch={() =>
          searchResources({
            selectedOptions,
            setIsLoading,
            setResources
          })
        }
      />
      <ResourceFooter />
    </>
  )
}

export default ResourcePage

