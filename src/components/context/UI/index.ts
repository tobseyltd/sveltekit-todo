/* eslint-disable @typescript-eslint/no-explicit-any */
import { getContext } from 'svelte';

export const key = Symbol();

export const getUIContext = (): any => getContext(key);
