/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class AudioPlayerService {
    constructor() {
        this.playlist = [];
        this.indexSong = 0;
        this.currentTrack = new BehaviorSubject(this.playlist[this.indexSong]);
        this.currentTime = 0;
        this.duration = 0;
    }
    /**
     * @return {?}
     */
    init() {
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    nextSong() {
        if ((this.indexSong + 1) >= this.playlist.length) {
            this.indexSong = 0;
        }
        else {
            this.indexSong++;
        }
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    previousSong() {
        if ((this.indexSong - 1) < 0) {
            this.indexSong = (this.playlist.length - 1);
        }
        else {
            this.indexSong--;
        }
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    resetPlaylist() {
        this.indexSong = 0;
        this.updateCurrentSong();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectATrack(index) {
        this.indexSong = index - 1;
        this.updateCurrentSong();
    }
    /**
     * @return {?}
     */
    updateCurrentSong() {
        /** @type {?} */
        const current = this.playlist[this.indexSong];
        /** @type {?} */
        const previous = ((this.indexSong - 1) >= 0) ? this.playlist[this.indexSong - 1] : this.playlist[this.playlist.length - 1];
        /** @type {?} */
        const next = ((this.indexSong + 1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong + 1];
        this.currentTrack.next([
            previous,
            current,
            next
        ]);
    }
    /**
     * @return {?}
     */
    getSubjectCurrentTrack() {
        return this.currentTrack;
    }
    /**
     * @return {?}
     */
    getPlaylist() {
        return this.playlist;
    }
    /**
     * @param {?} playlist
     * @return {?}
     */
    setPlaylist(playlist) {
        this.playlist = playlist;
    }
    /**
     * @return {?}
     */
    getIndexSong() {
        return this.indexSong;
    }
}
AudioPlayerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AudioPlayerService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QyxNQUFNLE9BQU8sa0JBQWtCO0lBUzdCO1FBUEEsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsaUJBQVksR0FBd0IsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBSWIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGlCQUFpQjs7Y0FDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOztjQUN2QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2NBQ3BILElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLFFBQVE7WUFDUixPQUFPO1lBQ1AsSUFBSTtTQUNMLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWlCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7OztZQXhFRixVQUFVOzs7Ozs7SUFHVCxzQ0FBdUI7O0lBRXZCLHVDQUFjOztJQUNkLDBDQUF1Rjs7SUFDdkYseUNBQWdCOztJQUNoQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tICcuLi8uLi9tb2RlbC90cmFjay5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpb1BsYXllclNlcnZpY2Uge1xuXG4gIHBsYXlsaXN0OiBUcmFja1tdID0gW107XG5cbiAgaW5kZXhTb25nID0gMDtcbiAgY3VycmVudFRyYWNrOiBCZWhhdmlvclN1YmplY3Q8e30+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnBsYXlsaXN0W3RoaXMuaW5kZXhTb25nXSk7XG4gIGN1cnJlbnRUaW1lID0gMDtcbiAgZHVyYXRpb24gPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ3VycmVudFNvbmcoKTtcbiAgfVxuXG4gIG5leHRTb25nKCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5pbmRleFNvbmcgKyAxKSA+PSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5pbmRleFNvbmcgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV4U29uZysrO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTb25nKCk7XG4gIH1cblxuICBwcmV2aW91c1NvbmcoKTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLmluZGV4U29uZyAtIDEpIDwgMCkge1xuICAgICAgdGhpcy5pbmRleFNvbmcgPSAodGhpcy5wbGF5bGlzdC5sZW5ndGggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleFNvbmctLTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICB9XG5cbiAgcmVzZXRQbGF5bGlzdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluZGV4U29uZyA9IDA7XG4gICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICB9XG5cbiAgc2VsZWN0QVRyYWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluZGV4U29uZyA9IGluZGV4IC0gMTtcbiAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTb25nKCk7XG4gIH1cblxuICB1cGRhdGVDdXJyZW50U29uZygpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5wbGF5bGlzdFt0aGlzLmluZGV4U29uZ107XG4gICAgY29uc3QgcHJldmlvdXMgPSAoKHRoaXMuaW5kZXhTb25nIC0gMSkgPj0gMCkgPyB0aGlzLnBsYXlsaXN0W3RoaXMuaW5kZXhTb25nIC0gMV0gOiB0aGlzLnBsYXlsaXN0W3RoaXMucGxheWxpc3QubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV4dCA9ICgodGhpcy5pbmRleFNvbmcgKyAxKSA+PSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCkgPyB0aGlzLnBsYXlsaXN0WzBdIDogdGhpcy5wbGF5bGlzdFt0aGlzLmluZGV4U29uZyArIDFdO1xuXG4gICAgdGhpcy5jdXJyZW50VHJhY2submV4dChbXG4gICAgICBwcmV2aW91cyxcbiAgICAgIGN1cnJlbnQsXG4gICAgICBuZXh0XG4gICAgXSk7XG4gIH1cblxuICBnZXRTdWJqZWN0Q3VycmVudFRyYWNrKCk6IEJlaGF2aW9yU3ViamVjdDx7fT4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUcmFjaztcbiAgfVxuXG4gIGdldFBsYXlsaXN0KCk6IFRyYWNrW10ge1xuICAgIHJldHVybiB0aGlzLnBsYXlsaXN0O1xuICB9XG5cbiAgc2V0UGxheWxpc3QocGxheWxpc3Q6IFRyYWNrW10pIHtcbiAgICB0aGlzLnBsYXlsaXN0ID0gcGxheWxpc3Q7XG4gIH1cblxuICBnZXRJbmRleFNvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhTb25nO1xuICB9XG59XG4iXX0=