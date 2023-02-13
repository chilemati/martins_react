import { atom } from "recoil";
//! using atom step:2

export const likes = atom({
	key: "likes",
	default: 0,
});

export const cart = atom({
	key: "cart",
	default: 0,
});
