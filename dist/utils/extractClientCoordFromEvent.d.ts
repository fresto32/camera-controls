import * as _THREE from 'three/src/Three.d';
import { DraggingDeadzone } from '../types';
export declare function extractClientCoordFromEvent(event: Event, out: _THREE.Vector2, deadzones: DraggingDeadzone[], lastPosition: _THREE.Vector2): _THREE.Vector2;
