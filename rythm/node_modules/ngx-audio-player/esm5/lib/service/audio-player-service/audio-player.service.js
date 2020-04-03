/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var AudioPlayerService = /** @class */ (function () {
    function AudioPlayerService() {
        this.playlist = [];
        this.indexSong = 0;
        this.currentTrack = new BehaviorSubject(this.playlist[this.indexSong]);
        this.currentTime = 0;
        this.duration = 0;
    }
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.updateCurrentSong();
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.nextSong = /**
     * @return {?}
     */
    function () {
        if ((this.indexSong + 1) >= this.playlist.length) {
            this.indexSong = 0;
        }
        else {
            this.indexSong++;
        }
        this.updateCurrentSong();
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.previousSong = /**
     * @return {?}
     */
    function () {
        if ((this.indexSong - 1) < 0) {
            this.indexSong = (this.playlist.length - 1);
        }
        else {
            this.indexSong--;
        }
        this.updateCurrentSong();
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.resetPlaylist = /**
     * @return {?}
     */
    function () {
        this.indexSong = 0;
        this.updateCurrentSong();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AudioPlayerService.prototype.selectATrack = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.indexSong = index - 1;
        this.updateCurrentSong();
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.updateCurrentSong = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = this.playlist[this.indexSong];
        /** @type {?} */
        var previous = ((this.indexSong - 1) >= 0) ? this.playlist[this.indexSong - 1] : this.playlist[this.playlist.length - 1];
        /** @type {?} */
        var next = ((this.indexSong + 1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong + 1];
        this.currentTrack.next([
            previous,
            current,
            next
        ]);
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.getSubjectCurrentTrack = /**
     * @return {?}
     */
    function () {
        return this.currentTrack;
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.getPlaylist = /**
     * @return {?}
     */
    function () {
        return this.playlist;
    };
    /**
     * @param {?} playlist
     * @return {?}
     */
    AudioPlayerService.prototype.setPlaylist = /**
     * @param {?} playlist
     * @return {?}
     */
    function (playlist) {
        this.playlist = playlist;
    };
    /**
     * @return {?}
     */
    AudioPlayerService.prototype.getIndexSong = /**
     * @return {?}
     */
    function () {
        return this.indexSong;
    };
    AudioPlayerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AudioPlayerService.ctorParameters = function () { return []; };
    return AudioPlayerService;
}());
export { AudioPlayerService };
if (false) {
    /** @type {?} */
    AudioPlayerService.prototype.playlist;
    /** @type {?} */
    AudioPlayerService.prototype.indexSong;
    /** @type {?} */
    AudioPlayerService.prototype.currentTrack;
    /** @type {?} */
    AudioPlayerService.prototype.currentTime;
    /** @type {?} */
    AudioPlayerService.prototype.duration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQVVFO1FBUEEsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsaUJBQVksR0FBd0IsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBSWIsQ0FBQzs7OztJQUVELGlDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHlDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsOENBQWlCOzs7SUFBakI7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFDdkMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztZQUNwSCxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVsSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixRQUFRO1lBQ1IsT0FBTztZQUNQLElBQUk7U0FDTCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsbURBQXNCOzs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxRQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7O2dCQXhFRixVQUFVOzs7O0lBeUVYLHlCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0F4RVksa0JBQWtCOzs7SUFFN0Isc0NBQXVCOztJQUV2Qix1Q0FBYzs7SUFDZCwwQ0FBdUY7O0lBQ3ZGLHlDQUFnQjs7SUFDaEIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHJhY2subW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXVkaW9QbGF5ZXJTZXJ2aWNlIHtcblxuICBwbGF5bGlzdDogVHJhY2tbXSA9IFtdO1xuXG4gIGluZGV4U29uZyA9IDA7XG4gIGN1cnJlbnRUcmFjazogQmVoYXZpb3JTdWJqZWN0PHt9PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5wbGF5bGlzdFt0aGlzLmluZGV4U29uZ10pO1xuICBjdXJyZW50VGltZSA9IDA7XG4gIGR1cmF0aW9uID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTb25nKCk7XG4gIH1cblxuICBuZXh0U29uZygpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuaW5kZXhTb25nICsgMSkgPj0gdGhpcy5wbGF5bGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5kZXhTb25nID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleFNvbmcrKztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICB9XG5cbiAgcHJldmlvdXNTb25nKCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5pbmRleFNvbmcgLSAxKSA8IDApIHtcbiAgICAgIHRoaXMuaW5kZXhTb25nID0gKHRoaXMucGxheWxpc3QubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXhTb25nLS07XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ3VycmVudFNvbmcoKTtcbiAgfVxuXG4gIHJlc2V0UGxheWxpc3QoKTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFNvbmcgPSAwO1xuICAgIHRoaXMudXBkYXRlQ3VycmVudFNvbmcoKTtcbiAgfVxuXG4gIHNlbGVjdEFUcmFjayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbmRleFNvbmcgPSBpbmRleCAtIDE7XG4gICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICB9XG5cbiAgdXBkYXRlQ3VycmVudFNvbmcoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMucGxheWxpc3RbdGhpcy5pbmRleFNvbmddO1xuICAgIGNvbnN0IHByZXZpb3VzID0gKCh0aGlzLmluZGV4U29uZyAtIDEpID49IDApID8gdGhpcy5wbGF5bGlzdFt0aGlzLmluZGV4U29uZyAtIDFdIDogdGhpcy5wbGF5bGlzdFt0aGlzLnBsYXlsaXN0Lmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG5leHQgPSAoKHRoaXMuaW5kZXhTb25nICsgMSkgPj0gdGhpcy5wbGF5bGlzdC5sZW5ndGgpID8gdGhpcy5wbGF5bGlzdFswXSA6IHRoaXMucGxheWxpc3RbdGhpcy5pbmRleFNvbmcgKyAxXTtcblxuICAgIHRoaXMuY3VycmVudFRyYWNrLm5leHQoW1xuICAgICAgcHJldmlvdXMsXG4gICAgICBjdXJyZW50LFxuICAgICAgbmV4dFxuICAgIF0pO1xuICB9XG5cbiAgZ2V0U3ViamVjdEN1cnJlbnRUcmFjaygpOiBCZWhhdmlvclN1YmplY3Q8e30+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VHJhY2s7XG4gIH1cblxuICBnZXRQbGF5bGlzdCgpOiBUcmFja1tdIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5bGlzdDtcbiAgfVxuXG4gIHNldFBsYXlsaXN0KHBsYXlsaXN0OiBUcmFja1tdKSB7XG4gICAgdGhpcy5wbGF5bGlzdCA9IHBsYXlsaXN0O1xuICB9XG5cbiAgZ2V0SW5kZXhTb25nKCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4U29uZztcbiAgfVxufVxuIl19