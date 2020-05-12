import * as _THREE from 'three';
import { ACTION, MouseButtons, Touches, FitToOptions, DraggingDeadzone } from './types';
import { EventDispatcher } from './EventDispatcher';
export declare class CameraControls extends EventDispatcher {
    static install(libs: any): void;
    static readonly ACTION: Readonly<typeof ACTION>;
    enabled: boolean;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    minDistance: number;
    maxDistance: number;
    minZoom: number;
    maxZoom: number;
    dampingFactor: number;
    draggingDampingFactor: number;
    azimuthRotateSpeed: number;
    polarRotateSpeed: number;
    dollySpeed: number;
    truckSpeed: number;
    dollyToCursor: boolean;
    verticalDragToForward: boolean;
    boundaryFriction: number;
    colliderMeshes: _THREE.Object3D[];
    mouseButtons: MouseButtons;
    touches: Touches;
    protected _camera: _THREE.PerspectiveCamera | _THREE.OrthographicCamera;
    protected _yAxisUpSpace: _THREE.Quaternion;
    protected _yAxisUpSpaceInverse: _THREE.Quaternion;
    protected _state: ACTION;
    protected _domElement: HTMLElement;
    protected _viewport: _THREE.Vector4 | null;
    protected _target: _THREE.Vector3;
    protected _targetEnd: _THREE.Vector3;
    protected _spherical: _THREE.Spherical;
    protected _sphericalEnd: _THREE.Spherical;
    protected _zoom: number;
    protected _zoomEnd: number;
    protected _target0: _THREE.Vector3;
    protected _position0: _THREE.Vector3;
    protected _zoom0: number;
    protected _dollyControlAmount: number;
    protected _dollyControlCoord: _THREE.Vector2;
    protected _nearPlaneCorners: _THREE.Vector3[];
    protected _draggingDeadzones: DraggingDeadzone[];
    protected _boundary: _THREE.Box3;
    protected _boundaryEnclosesCamera: boolean;
    protected _needsUpdate: boolean;
    protected _updatedLastTime: boolean;
    constructor(camera: _THREE.PerspectiveCamera | _THREE.OrthographicCamera, domElement: HTMLElement);
    distance: number;
    azimuthAngle: number;
    polarAngle: number;
    phiSpeed: number;
    thetaSpeed: number;
    boundaryEnclosesCamera: boolean;
    rotate(azimuthAngle: number, polarAngle: number, enableTransition?: boolean): void;
    rotateTo(azimuthAngle: number, polarAngle: number, enableTransition?: boolean): void;
    dolly(distance: number, enableTransition?: boolean): void;
    dollyTo(distance: number, enableTransition?: boolean): void;
    zoom(zoomStep: number, enableTransition?: boolean): void;
    zoomTo(zoom: number, enableTransition?: boolean): void;
    pan(x: number, y: number, enableTransition?: boolean): void;
    truck(x: number, y: number, enableTransition?: boolean): void;
    forward(distance: number, enableTransition?: boolean): void;
    moveTo(x: number, y: number, z: number, enableTransition?: boolean): void;
    fitTo(box3OrObject: _THREE.Box3 | _THREE.Object3D, enableTransition: boolean, { paddingLeft, paddingRight, paddingBottom, paddingTop }?: Partial<FitToOptions>): void;
    setLookAt(positionX: number, positionY: number, positionZ: number, targetX: number, targetY: number, targetZ: number, enableTransition?: boolean): void;
    lerpLookAt(positionAX: number, positionAY: number, positionAZ: number, targetAX: number, targetAY: number, targetAZ: number, positionBX: number, positionBY: number, positionBZ: number, targetBX: number, targetBY: number, targetBZ: number, t: number, enableTransition?: boolean): void;
    setPosition(positionX: number, positionY: number, positionZ: number, enableTransition?: boolean): void;
    setTarget(targetX: number, targetY: number, targetZ: number, enableTransition?: boolean): void;
    setDraggingDeadzones(draggingDeadzones: DraggingDeadzone[]): void;
    setBoundary(box3: _THREE.Box3): void;
    setViewport(viewportOrX: _THREE.Vector4 | number | null, y: number, width: number, height: number): void;
    getDistanceToFit(width: number, height: number, depth: number): number;
    getTarget(out: _THREE.Vector3): _THREE.Vector3;
    getPosition(out: _THREE.Vector3): _THREE.Vector3;
    normalizeRotations(): void;
    reset(enableTransition?: boolean): void;
    saveState(): void;
    updateCameraUp(): void;
    update(delta: number): boolean;
    toJSON(): string;
    fromJSON(json: string, enableTransition?: boolean): void;
    dispose(): void;
    protected _encloseToBoundary(position: _THREE.Vector3, offset: _THREE.Vector3, friction: number): _THREE.Vector3;
    protected _updateNearPlaneCorners(): void;
    protected _collisionTest(): number;
    protected _getClientRect(target: _THREE.Vector4): _THREE.Vector4;
    protected _removeAllEventListeners(): void;
}
