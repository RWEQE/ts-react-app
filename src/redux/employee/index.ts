import { Dispatch } from 'redux';

import { get } from '../../utils/request';
import { GET_EMPLOYEE_URL } from '../../constants/urls';
import { GET_EMPLOYEE } from '../../constants/actions';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee'

type State = Readonly<{
  employeeList: EmployeeResponse
}>

type Action = {
  type: string;
  payload: EmployeeResponse;
}

const initialState: State = {
  employeeList: undefined
}

export function getEmployee(params: EmployeeRequest) {
  return (dispatch: Dispatch) => {
    get(GET_EMPLOYEE_URL, params).then(response => {
      dispatch({
        type: GET_EMPLOYEE,
        payload: response.data
      })
    });
  }
}

export default (function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_EMPLOYEE: 
      return {
        ...state,
        employeeList: action.payload
      }
    default: 
      return state
  }
})