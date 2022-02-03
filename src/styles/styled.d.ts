// import original module declarations
import 'styled-components';

// 참고
// https://egas.tistory.com/m/125

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            main: string;
            secondary: string;
        };
    }
}