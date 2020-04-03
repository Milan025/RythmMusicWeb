/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSliderModule, MatExpansionModule, MatFormFieldModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatBasicAudioPlayerComponent } from './component/mat-basic-audio-player/mat-basic-audio-player.component';
import { AudioPlayerService } from './service/audio-player-service/audio-player.service';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { MatAdvancedAudioPlayerComponent } from './component/mat-advanced-audio-player/mat-advanced-audio-player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
                        MatSliderModule, MatExpansionModule, MatPaginatorModule
                    ]
                },] }
    ];
    return MaterialModule;
}());
export { MaterialModule };
var NgxAudioPlayerModule = /** @class */ (function () {
    function NgxAudioPlayerModule() {
        // Icons for User Favorite Page
        library.add(faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp);
    }
    NgxAudioPlayerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
                    imports: [CommonModule, FormsModule, FontAwesomeModule, MaterialModule],
                    exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
                    providers: [AudioPlayerService]
                },] }
    ];
    /** @nocollapse */
    NgxAudioPlayerModule.ctorParameters = function () { return []; };
    return NgxAudioPlayerModule;
}());
export { NgxAudioPlayerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1ZGlvLXBsYXllci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL25neC1hdWRpby1wbGF5ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQzVILE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDbkgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUNwRixNQUFNLG1DQUFtQyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBTThCLENBQUM7O2dCQU45QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjt3QkFDbEUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjtxQkFDeEQ7aUJBQ0Y7O0lBQzZCLHFCQUFDO0NBQUEsQUFOL0IsSUFNK0I7U0FBbEIsY0FBYztBQUUzQjtJQU9FO1FBQ0UsK0JBQStCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLG9CQUFvQixFQUFFLCtCQUErQixDQUFDO29CQUNuRyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztvQkFDdkUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsK0JBQStCLENBQUM7b0JBQ3hFLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUNoQzs7OztJQU1ELDJCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Q2FyZE1vZHVsZSwgTWF0U2xpZGVyTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0VGFibGVNb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCYXNpY0F1ZGlvUGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbWF0LWJhc2ljLWF1ZGlvLXBsYXllci9tYXQtYmFzaWMtYXVkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdWRpb1BsYXllclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlY29uZHNUb01pbnV0ZXNQaXBlIH0gZnJvbSAnLi9waXBlL3NlY29uZHMtdG8tbWludXRlcyc7XG5pbXBvcnQgeyBNYXRBZHZhbmNlZEF1ZGlvUGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtcbiAgZmFQbGF5LCBmYVBhdXNlLCBmYVNwaW5uZXIsIGZhU3RlcEZvcndhcmQsIGZhU3RlcEJhY2t3YXJkLCBmYVZvbHVtZU11dGUsIGZhVm9sdW1lVXBcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRUYWJsZU1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSwgTWF0RXhwYW5zaW9uTW9kdWxlLCBNYXRQYWdpbmF0b3JNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7IH1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWF0QmFzaWNBdWRpb1BsYXllckNvbXBvbmVudCwgU2Vjb25kc1RvTWludXRlc1BpcGUsIE1hdEFkdmFuY2VkQXVkaW9QbGF5ZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIE1hdGVyaWFsTW9kdWxlXSxcbiAgZXhwb3J0czogW01hdEJhc2ljQXVkaW9QbGF5ZXJDb21wb25lbnQsIE1hdEFkdmFuY2VkQXVkaW9QbGF5ZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBdWRpb1BsYXllclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5neEF1ZGlvUGxheWVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gSWNvbnMgZm9yIFVzZXIgRmF2b3JpdGUgUGFnZVxuICAgIGxpYnJhcnkuYWRkKGZhUGxheSwgZmFQYXVzZSwgZmFTcGlubmVyLCBmYVN0ZXBGb3J3YXJkLCBmYVN0ZXBCYWNrd2FyZCwgZmFWb2x1bWVNdXRlLCBmYVZvbHVtZVVwKTtcbiAgfVxufVxuIl19