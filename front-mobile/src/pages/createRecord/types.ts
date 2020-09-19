export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';
export type Game = {

    id: number;
    platform: GamePlatform;
    title: string;
    label: string;
    value: number;

}