/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ViewChild, ElementRef } from '@angular/core';
export class BaseAudioPlayerFunctions {
    constructor() {
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
    currTimePosChanged(event) {
        this.player.nativeElement.currentTime = event.value;
    }
    /**
     * @return {?}
     */
    bindPlayerEvent() {
        this.player.nativeElement.addEventListener('playing', (/**
         * @return {?}
         */
        () => {
            this.isPlaying = true;
            this.duration = Math.floor(this.player.nativeElement.duration);
        }));
        this.player.nativeElement.addEventListener('pause', (/**
         * @return {?}
         */
        () => {
            this.isPlaying = false;
        }));
        this.player.nativeElement.addEventListener('timeupdate', (/**
         * @return {?}
         */
        () => {
            this.currentTime = Math.floor(this.player.nativeElement.currentTime);
        }));
        this.player.nativeElement.addEventListener('volume', (/**
         * @return {?}
         */
        () => {
            this.volume = Math.floor(this.player.nativeElement.volume);
        }));
        this.player.nativeElement.addEventListener('loadstart', (/**
         * @return {?}
         */
        () => {
            this.loaderDisplay = true;
        }));
        this.player.nativeElement.addEventListener('loadeddata', (/**
         * @return {?}
         */
        () => {
            this.loaderDisplay = false;
            this.duration = Math.floor(this.player.nativeElement.duration);
        }));
    }
    /**
     * @return {?}
     */
    playBtnHandler() {
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
    }
    /**
     * @return {?}
     */
    play() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.player.nativeElement.play();
        }), 0);
    }
    /**
     * @return {?}
     */
    toggleVolume() {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    }
    /**
     * @private
     * @param {?} vol
     * @return {?}
     */
    setVolume(vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    }
}
BaseAudioPlayerFunctions.propDecorators = {
    player: [{ type: ViewChild, args: ['audioPlayer', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hdWRpby1wbGF5ZXItY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hdWRpby1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2Jhc2UvYmFzZS1hdWRpby1wbGF5ZXItY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEQsTUFBTSxPQUFPLHdCQUF3QjtJQUFyQztRQUtJLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxJQUFJLENBQUM7SUE0RHBCLENBQUM7Ozs7O0lBMURHLGtCQUFrQixDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7UUFBRSxHQUFHLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTzs7O1FBQUUsR0FBRyxFQUFFO1lBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWTs7O1FBQUUsR0FBRyxFQUFFO1lBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7OztRQUFFLEdBQUcsRUFBRTtZQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXOzs7UUFBRSxHQUFHLEVBQUU7WUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZOzs7UUFBRSxHQUFHLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELGNBQWM7UUFDVixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSTtRQUNBLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQzs7O3FCQWpFQSxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7OztJQUF4QywwQ0FBNkQ7O0lBQzdELG9EQUE0Qjs7SUFFNUIsaURBQXNCOztJQUN0Qiw2Q0FBa0I7O0lBQ2xCLCtDQUFnQjs7SUFDaEIsMENBQWE7O0lBQ2IsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMge1xuXG4gICAgQFZpZXdDaGlsZCgnYXVkaW9QbGF5ZXInLCB7c3RhdGljOiB0cnVlfSkgcGxheWVyOiBFbGVtZW50UmVmO1xuICAgIHRpbWVMaW5lRHVyYXRpb246IE1hdFNsaWRlcjtcblxuICAgIGxvYWRlckRpc3BsYXkgPSBmYWxzZTtcbiAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBjdXJyZW50VGltZSA9IDA7XG4gICAgdm9sdW1lID0gMC4xO1xuICAgIGR1cmF0aW9uID0gMC4wMTtcblxuICAgIGN1cnJUaW1lUG9zQ2hhbmdlZChldmVudCkge1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lID0gZXZlbnQudmFsdWU7XG4gICAgfVxuXG4gICAgYmluZFBsYXllckV2ZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IE1hdGguZmxvb3IodGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnZvbHVtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyRGlzcGxheSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlckRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLmZsb29yKHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwbGF5QnRuSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyRGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5wbGF5KHRoaXMuY3VycmVudFRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5KCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB0b2dnbGVWb2x1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoMS4wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Vm9sdW1lKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWb2x1bWUodm9sKSB7XG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnZvbHVtZSA9IHRoaXMudm9sdW1lO1xuICAgIH1cblxufVxuIl19