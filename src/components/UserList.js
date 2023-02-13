import React from 'react'
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { actionDeleteUser, actionSelectUser } from '../redux/actions/userActions';


function UserList(props) {
  const { users } = useSelector((state)=>{
    return state.user
  });
  const dispatch = useDispatch();
  const handleDelete = (userID) => {
    dispatch(actionDeleteUser(userID))
  };
  const  handleSelect = (userID) => {
  };
  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: '1',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '2',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: '3',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      render: (users) => (
        <Space size="middle">
          <a onClick={()=>{handleSelect(users.Users)}} className="text-indigo-500">Edit</a>
          <a onClick={()=>{handleDelete(users.Users)}} className="text-red-500">Delete</a>
        </Space>
      )
    },
  ];

  return (
    <div className='container mx-auto my-8 px-4'>
      <Table
        columns={columns}
        dataSource={users}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  )
}

export default UserList