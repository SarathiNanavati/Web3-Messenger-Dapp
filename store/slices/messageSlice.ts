import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface MessageState {
  messages: MessageInfo[];
}

export interface MessageInfo {
  message: string;
  userAddress: string;
  createdAt: number;
}

const initialState: MessageState = {
  messages: [
    {
      message: "Hello There",
      userAddress: "0x57E2355F3CD8CB932952e773a5C57b64cE692e76",
      createdAt: Date.now(),
    },
    {
      message: "Whatsupp!",
      userAddress: "0x57E2355F3CD8CB932952e773a5C57b64cE692e76",
      createdAt: Date.now(),
    },
  ],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addNewMessage(state, action: PayloadAction<{ message: string; userAddress: string }>) {
      state.messages.push({
        message: action.payload.message,
        userAddress: action.payload.userAddress,
        createdAt: Date.now(),
      });
    },
  },
});

export const { addNewMessage } = messageSlice.actions;

export const getMessages = (state: RootState) => state.message;

export default messageSlice.reducer;
