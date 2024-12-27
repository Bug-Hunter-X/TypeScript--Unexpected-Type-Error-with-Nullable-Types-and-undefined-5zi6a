# TypeScript: Unexpected Type Error with Nullable Types and 'undefined'

This example demonstrates a common issue in TypeScript involving nullable types and the `undefined` value.  TypeScript's type system doesn't automatically treat `undefined` as a subtype of `null`, which can lead to unexpected type errors.  The solution involves explicitly handling `undefined` in the function's type definition or logic.

## Bug

The `greet` function expects a parameter that is either a string or `null`.  While it correctly handles `null`, it throws a type error if you pass `undefined`. This is because TypeScript's type system considers `null` and `undefined` as distinct types.

## Solution

The solution involves either modifying the function's type signature to include `undefined` or adding a check for `undefined` within the function's logic.