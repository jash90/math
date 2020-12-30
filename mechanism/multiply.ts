import { GameLevel } from "../interfaces/enum";
import { Multiply } from "../interfaces/interfaces";

export const generate = (level: GameLevel): Multiply => {
    switch (level) {
        case GameLevel.LOW: {
            const factor1: number = Math.floor(Number((Math.random() * 10).toPrecision(1)));
            const factor2: number = Math.floor(Number((Math.random() * 10).toPrecision(1)));
            return { factor1, factor2, result: factor1 * factor2 };
        }
        case GameLevel.MID: {
            const factor1: number = Math.floor(Number((Math.random() * 8 + 2).toPrecision(1)));
            const factor2: number = Math.floor(Number((Math.random() * 8 + 2).toPrecision(1)));
            return { factor1, factor2, result: factor1 * factor2 };
        }
        case GameLevel.HIGH: {
            const factor1: number = Math.floor(Number((Math.random() * 5 + 5).toPrecision(1)));
            const factor2: number = Math.floor(Number((Math.random() * 5 + 5).toPrecision(1)));
            return { factor1, factor2, result: factor1 * factor2 };
        }
        default: {
            const factor1: number = Math.floor(Number((Math.random() * 10).toPrecision(1)));
            const factor2: number = Math.floor(Number((Math.random() * 10).toPrecision(1)));
            return { factor1, factor2, result: factor1 * factor2 };
        }
    }
}