import { Platform } from "../Records/types";

export type Game = {
    id: number;
    title: string;
    platform: Platform
}

export type CharItem = {
    x: string;
    y: number;
}