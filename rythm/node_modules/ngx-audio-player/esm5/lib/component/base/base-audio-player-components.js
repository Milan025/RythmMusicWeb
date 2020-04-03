/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ViewChild, ElementRef } from '@angular/core';
var BaseAudioPlayerFunctions = /** @class */ (function () {
    function BaseAudioPlayerFunctions() {
        this.loaderDisplay = false;
        this.isPlaying = false;
        this.currentTime = 0;
        this.volume = 0.1;
        this.duration = 0.01;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BaseAudioPlayerFunctions.prototype.currTimePosChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.player.nativeElement.currentTime = event.value;
    };
    /**
     * @return {?}
     */
    BaseAudioPlayerFunctions.prototype.bindPlayerEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.player.nativeElement.addEventListener('playing', (/**
         * @return {?}
         */
        function () {
            _this.isPlaying = true;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        }));
        this.player.nativeElement.addEventListener('pause', (/**
         * @return {?}
         */
        function () {
            _this.isPlaying = false;
        }));
        this.player.nativeElement.addEventListener('timeupdate', (/**
         * @return {?}
         */
        function () {
            _this.currentTime = Math.floor(_this.player.nativeElement.currentTime);
        }));
        this.player.nativeElement.addEventListener('volume', (/**
         * @return {?}
         */
        function () {
            _this.volume = Math.floor(_this.player.nativeElement.volume);
        }));
        this.player.nativeElement.addEventListener('loadstart', (/**
         * @return {?}
         */
        function () {
            _this.loaderDisplay = true;
        }));
        this.player.nativeElement.addEventListener('loadeddata', (/**
         * @return {?}
         */
        function () {
            _this.loaderDisplay = false;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        }));
    };
    /**
     * @return {?}
     */
    BaseAudioPlayerFunctions.prototype.playBtnHandler = /**
     * @return {?}
     */
    function () {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            this.player.nativeElement.play(this.currentTime);
        }
        else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    };
    /**
     * @return {?}
     */
    BaseAudioPlayerFunctions.prototype.play = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.player.nativeElement.play();
        }), 0);
    };
    /**
     * @return {?}
     */
    BaseAudioPlayerFunctions.prototype.toggleVolume = /**
     * @return {?}
     */
    function () {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    };
    /**
     * @private
     * @param {?} vol
     * @return {?}
     */
    BaseAudioPlayerFunctions.prototype.setVolume = /**
     * @private
     * @param {?} vol
     * @return {?}
     */
    function (vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    };
    BaseAudioPlayerFunctions.propDecorators = {
        player: [{ type: ViewChild, args: ['audioPlayer', { static: true },] }]
    };
    return BaseAudioPlayerFunctions;
}());
export { BaseAudioPlayerFunctions };
if (false) {
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.player;
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.timeLineDuration;
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.loaderDisplay;
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.isPlaying;
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.currentTime;
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.volume;
    /** @type {?} */
    BaseAudioPlayerFunctions.prototype.duration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hdWRpby1wbGF5ZXItY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hdWRpby1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2Jhc2UvYmFzZS1hdWRpby1wbGF5ZXItY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEQ7SUFBQTtRQUtJLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxJQUFJLENBQUM7SUE0RHBCLENBQUM7Ozs7O0lBMURHLHFEQUFrQjs7OztJQUFsQixVQUFtQixLQUFLO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxrREFBZTs7O0lBQWY7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7O1FBQUU7WUFDbEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7O1FBQUU7WUFDaEQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZOzs7UUFBRTtZQUNyRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBRTtZQUNqRCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXOzs7UUFBRTtZQUNwRCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7OztRQUFFO1lBQ3JELEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxpREFBYzs7O0lBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQUk7OztJQUFKO1FBQUEsaUJBSUM7UUFIRyxVQUFVOzs7UUFBQztZQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCwrQ0FBWTs7O0lBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDOzs7Ozs7SUFFTyw0Q0FBUzs7Ozs7SUFBakIsVUFBa0IsR0FBRztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuRCxDQUFDOzt5QkFqRUEsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0lBbUU1QywrQkFBQztDQUFBLEFBckVELElBcUVDO1NBckVZLHdCQUF3Qjs7O0lBRWpDLDBDQUE2RDs7SUFDN0Qsb0RBQTRCOztJQUU1QixpREFBc0I7O0lBQ3RCLDZDQUFrQjs7SUFDbEIsK0NBQWdCOztJQUNoQiwwQ0FBYTs7SUFDYiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNsaWRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuZXhwb3J0IGNsYXNzIEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyB7XG5cbiAgICBAVmlld0NoaWxkKCdhdWRpb1BsYXllcicsIHtzdGF0aWM6IHRydWV9KSBwbGF5ZXI6IEVsZW1lbnRSZWY7XG4gICAgdGltZUxpbmVEdXJhdGlvbjogTWF0U2xpZGVyO1xuXG4gICAgbG9hZGVyRGlzcGxheSA9IGZhbHNlO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRUaW1lID0gMDtcbiAgICB2b2x1bWUgPSAwLjE7XG4gICAgZHVyYXRpb24gPSAwLjAxO1xuXG4gICAgY3VyclRpbWVQb3NDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPSBldmVudC52YWx1ZTtcbiAgICB9XG5cbiAgICBiaW5kUGxheWVyRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLmZsb29yKHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndm9sdW1lJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSBNYXRoLmZsb29yKHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQudm9sdW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJEaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyRGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5kdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBsYXlCdG5IYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2FkZXJEaXNwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBsYXkodGhpcy5jdXJyZW50VGltZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5wbGF5KCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHRvZ2dsZVZvbHVtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudm9sdW1lID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZSgxLjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZvbHVtZSh2b2wpIHtcbiAgICAgICAgdGhpcy52b2x1bWUgPSB2b2w7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQudm9sdW1lID0gdGhpcy52b2x1bWU7XG4gICAgfVxuXG59XG4iXX0=