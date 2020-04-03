/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 02:30
*/
export class SecondsToMinutesPipe {
    /**
     * @param {?} time
     * @return {?}
     */
    transform(time) {
        /** @type {?} */
        const minutes = ('0' + Math.floor(time / 60)).slice(-2);
        /** @type {?} */
        const seconds = ('0' + time % 60).slice(-2);
        return `${minutes}:${seconds}`;
    }
}
SecondsToMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'secondsToMinutes' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kcy10by1taW51dGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1ZGlvLXBsYXllci8iLCJzb3VyY2VzIjpbImxpYi9waXBlL3NlY29uZHMtdG8tbWludXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXBELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBQzdCLFNBQVMsQ0FBQyxJQUFZOztjQUNaLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDakQsT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUFOSixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKlxuICogVHJhbnNmb3JtIHNlY29uZHMgdG8gbWludXRlczpzZWNvbmRzXG4gKiBFeGFtcGxlIDogMjcwIC0+IDAyOjMwXG4qL1xuQFBpcGUoe25hbWU6ICdzZWNvbmRzVG9NaW51dGVzJ30pXG5leHBvcnQgY2xhc3MgU2Vjb25kc1RvTWludXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9ICgnMCcgKyBNYXRoLmZsb29yKHRpbWUgLyA2MCkpLnNsaWNlKC0yKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9ICgnMCcgKyB0aW1lICUgNjApLnNsaWNlKC0yKTtcbiAgICAgICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIH1cbn1cbiJdfQ==