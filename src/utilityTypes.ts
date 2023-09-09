export type OmitKeys<T, K> = Omit<T, keyof K>

type OptionalKeys<T> = { [ P in keyof T ]-?: undefined extends T[ P ] ? P : never }[ keyof T ]
export type OmitOptionalKeys<T> = Omit<T, OptionalKeys<T>>

type RequiredKeys<T> = { [ P in keyof T ]-?: undefined extends T[ P ] ? never : P }[ keyof T ]
export type OmitRequiredKeys<T> = Omit<T, RequiredKeys<T>>

export type DeepReadonly<T> = { readonly [ P in keyof T ]: T[ P ] extends (string | number | boolean) ? T[ P ] : DeepReadonly<T[ P ]> }

export type Merge<T, T2> = T & T2