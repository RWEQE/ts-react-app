import React, { Component} from 'react'
import { Table } from 'antd'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee'
import { getEmployee } from '../../redux/employee'

import './index.css'

import QueryForm from './QueryForm';

const employeeColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: '入职时间',
    dataIndex: 'hiredata',
    key: 'hiredata',
  },
  {
    title: '职级',
    dataIndex: 'level',
    key: 'level',
  },
]

interface Props {
  onGetEmployee(params: EmployeeRequest): void;
  employeeList: EmployeeResponse;
}

class Employee extends Component<Props> {
  render () {
    const { employeeList, onGetEmployee } = this.props
    return (
      <div>
        <QueryForm getData={onGetEmployee} />
        <Table columns={employeeColumns} dataSource={employeeList} className="table" />
      </div>
    )
  }
}

// 读取 state: mapStateToProps 把state里面的state映射到当前组件的props
const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList
});

// 分发 action: mapDispatchToProps接受dispatch()方法并返回期望注入到展示组件的 props 中的回调方法
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetEmployee: getEmployee
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);