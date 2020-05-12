import { DraggingDeadzone } from '../types';

export function isInADraggingDeadzone(
	x: number,
	y: number,
	deadzones: DraggingDeadzone[]
) {

	return deadzones.some( deadzone => {

		if (
			x > deadzone.min.x &&
      x < deadzone.max.x &&
      y > deadzone.min.y &&
      y < deadzone.max.y
		) {

			return true;

		}
		return false;

	} );

}
