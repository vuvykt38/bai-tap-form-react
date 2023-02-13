import React from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {actionFetchUsers} from'../redux/actions/userActions'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchUsers())
  }, [dispatch])

  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  )
}

export default Home