import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUser {
	id: string;
	username: string;
}

interface AuthState {
	isAuthenticated: boolean;
	user: AuthUser | null;
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<AuthUser>) {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
