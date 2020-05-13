import * as _THREE from 'three/src/Three.d';
import { isTouchEvent } from './isTouchEvent';
import { DraggingDeadzone } from '../types';
import { isInADraggingDeadzone } from './isInADraggingDeadzone';

export function extractClientCoordFromEvent(
	event: Event,
	out: _THREE.Vector2,
	deadzones: DraggingDeadzone[],
	lastPosition: _THREE.Vector2
) {

	out.set( 0, 0 );

	if ( isTouchEvent( event ) ) {

		const touchEvent = event as TouchEvent;

		let numInDeadzones = 0;

		for ( let i = 0; i < touchEvent.touches.length; i ++ ) {

			const x = touchEvent.touches[ i ].clientX;
			const y = touchEvent.touches[ i ].clientY;

			if ( ! isInADraggingDeadzone( x, y, deadzones ) ) {

				out.x += touchEvent.touches[ i ].clientX;
				out.y += touchEvent.touches[ i ].clientY;

			} else {

				numInDeadzones ++;

			}

		}

		const validTouchEvents = touchEvent.touches.length - numInDeadzones;

		if ( validTouchEvents > 0 ) {

			out.x /= touchEvent.touches.length - numInDeadzones;
			out.y /= touchEvent.touches.length - numInDeadzones;

		} else {

			out.copy( lastPosition );

		}

		return out;

	} else {

		const mouseEvent = event as MouseEvent;

		out.set( mouseEvent.clientX, mouseEvent.clientY );

		return out;

	}

}
