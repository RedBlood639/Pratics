import { GET_USERLIST, EDIT_USER, UserlistActions } from "./types";
import { Dispatch } from "redux";
import { AppState } from "..";
import { AppActions } from "../types";
import { apiClientwithToken } from "../../components/apiClient";

const FetchUserlist = (payload: any): UserlistActions => {
  return {
    type: GET_USERLIST,
    payload,
  };
};

const FetchUserEdit = (payload: any): UserlistActions => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const GetUserlist = (pageproperty: any): any => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await apiClientwithToken(localStorage.getItem("mindmail_admin_token"))
      .get("/admin/getusers", { params: pageproperty })
      .then((res) => {
        dispatch(FetchUserlist(res.data));
      })
      .catch((e) => console.log(e));
  };
};

export const EditUser = (id: number, role: string): any => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const data = getState().userlist.list;
    data.map((item: any) => {
      if (item.id === id) {
        item.role = role;
      }
    });
    dispatch(FetchUserEdit(data));
  };
};

export const DeleteUser = (id: number): any => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const data = getState().userlist.list;
    data.map((item: any) => {
      if (item.id === id) {
        item.state = 2;
      }
    });
    dispatch(FetchUserEdit(data));
  };
};
