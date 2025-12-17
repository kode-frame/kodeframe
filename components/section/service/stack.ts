export interface StackState {
  zIndex: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  blur: number;
}

export const STACK_STATES: StackState[] = [
  {
    zIndex: 30,
    x: 40,
    y: 0,
    scale: 1,
    opacity: 1,
    blur: 0,
  },
  {
    zIndex: 20,
    x: 0,
    y: -20,
    scale: 0.95,
    opacity: 0.6,
    blur: 1,
  },
  {
    zIndex: 10,
    x: -40,
    y: -40,
    scale: 0.9,
    opacity: 0.4,
    blur: 2,
  }
]