import { createReducer } from '@reduxjs/toolkit';

import { PopupType } from '../../const';
import { closePopup, openPopup } from '../action';

interface IDefaultState {
  isOpen: boolean;
  popupType: PopupType;
}

export const defaultState: IDefaultState = {
  isOpen: false,
  popupType: PopupType.None,
};

export const popup = createReducer(defaultState, (builder) => {
  builder.addCase(openPopup, (state, action) => {
    state.isOpen = true;
    state.popupType = action.payload;
  });
  builder.addCase(closePopup, (state, action) => {
    state.isOpen = false;
  });
});
