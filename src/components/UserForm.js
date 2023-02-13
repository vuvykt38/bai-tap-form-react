import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input } from 'antd';
import { actionCreateUser } from '../redux/actions/userActions'

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

function UserForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(
    {
      username: "",
      fullName: "",
      address: "",
      email: "",
      phone: "",
      age: "",
    }
  );
  const [error, setError] = useState({
    username: "",
    fullName: "",
    address: "",
    email: "",
    phone: "",
    age: "",
  });
  const selectedUser = useSelector((state)=>{
    return state.user.selectedUser
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setUser({
      ...user,
      [name]: value
    })
  };

  const handleSubmit = () => {
    const validationErrors = {};
    for (let key in user) {
      const message = validation(key, user[key]);
      if (message) {
        validationErrors[key] = message
      }
    }
    if (Object.keys(validationErrors).length > 1) {
      setError(validationErrors)
    } else {
      dispatch(actionCreateUser(user))
      setUser({
        ...user,
        username: "",
        fullName: "",
        address: "",
        email: "",
        phone: "",
        age: "",
      })
    }

  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target
    setError({
      ...error,
      [name]: validation(name, value)
    })
  };

  const validation = (name, value) => {
    switch (name) {
      case 'username': {
        if (!value.trim()) {
          return "Username cannot be empty"
        }
        return "";
      };
      case 'fullName': {
        if (!value.trim()) {
          return "Fullname cannot be empty"
        }
        return "";
      };
      case 'address': {
        if (!value.trim()) {
          return "Address cannot be empty"
        }
        return "";
      };
      case 'phone': {
        if (!value.trim()) {
          return "Phone cannot be empty"
        }
        return "";
      };
      case 'age': {
        if (!value.trim()) {
          return "Age cannot be empty"
        }
        return "";
      };
      case "email": {
        if (!value.trim()) {
          return "Email cannot be empty";
        }
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
          return "Email has wrong format";
        }
        return "";
      };
      default:
        return ""
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-3xl text-indigo-500 font-bold">User Management</h1>
      <div className=''>
        <Form name="form_item_path" layout="vertical" className="" onFinish={handleSubmit}>
          <MyFormItemGroup>
            <MyFormItem name="username" label="User Name">
              <Input name="username" onChange={handleChange} value={user.username} onBlur={handleBlur} />
              {error.username && (
                <div className="text-left text-xs text-red-500" >
                  {error.username}
                </div>
              )}
            </MyFormItem>
            <MyFormItem name="fullName" label="Full Name">
              <Input name="fullName" onChange={handleChange} value={user.fullName} onBlur={handleBlur} />
              {error.fullName && (
                <div className="text-left text-xs text-red-500" >
                  {error.fullName}
                </div>
              )}
            </MyFormItem>
            <MyFormItem name="email" label="Email">
              <Input name="email" onChange={handleChange} value={user.email} onBlur={handleBlur} />
              {error.email && (
                <div className='text-left text-xs text-red-500'>
                  {error.email}
                </div>
              )}
            </MyFormItem>
            <MyFormItem name="phone" label="Phone Number">
              <Input name="phone" onChange={handleChange} value={user.phone} onBlur={handleBlur} />
              {error.phone && (
                <div className='text-left text-xs text-red-500'>
                  {error.phone}
                </div>
              )}
            </MyFormItem>
            <MyFormItem name="age" label="Age">
              <Input name="age" onChange={handleChange} value={user.age} onBlur={handleBlur} />
              {error.age && (
                <div className='text-left text-xs text-red-500'>
                  {error.age}
                </div>
              )}
            </MyFormItem>
            <MyFormItem name="address" label="Address">
              <Input name="address" onChange={handleChange} value={user.address} onBlur={handleBlur} />
              {error.address && (
                <div className='text-left text-xs text-red-500'>
                  {error.address}
                </div>
              )}
            </MyFormItem>
          </MyFormItemGroup>

          <Button type="primary" htmlType="submit" className="bg-indigo-500">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default UserForm