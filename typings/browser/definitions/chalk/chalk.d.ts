// Compiled using typings@0.6.2
// Source: https://raw.githubusercontent.com/typings/typed-chalk/a7e422c5455e70292e5675a727d43a7b05fc3e58/index.d.ts
declare module 'chalk/index' {
    interface Styles<T> {
        // General
        reset: T;
        dim: T;
        bold: T;
        italic: T;
        underline: T;
        inverse: T;
        strikethrough: T;

        // Text colors
        black: T;
        red: T;
        green: T;
        yellow: T;
        blue: T;
        magenta: T;
        cyan: T;
        white: T;
        gray: T;
        grey: T;

        // Background colors
        bgBlack: T;
        bgRed: T;
        bgGreen: T;
        bgYellow: T;
        bgBlue: T;
        bgMagenta: T;
        bgCyan: T;
        bgWhite: T;
    }

    interface Chalk extends Styles<ChalkChain> {
        enabled: boolean;
    }

    interface ChalkChain extends Chalk {
        (value: string): string;
    }

    interface StyleElement {
        open: string;
        close: string;
        closeRe: RegExp;
    }

    interface ChalkExports extends Chalk {
        constructor(options: { enabled: boolean }): Chalk;

        styles: Styles<StyleElement>;
        supportsColor: boolean;
        hasColor(value: string): boolean;
        stripColor(value: string): string;
    }

    var chalk: ChalkExports;

    export = chalk;
}
// declare module 'chalk' {
//     import main = require('chalk/index');
//     export = main;
// }