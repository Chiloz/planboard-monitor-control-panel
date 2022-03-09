import { ICommunity } from "./community.model";

export interface IDivision {
    name: string;
    communities: ICommunity[];
}