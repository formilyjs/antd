# Reset

> Reset button

## Normal reset

> Controls with default values cannot be cleared

<code src="../demos/reset/Normal.tsx"/>

## Force empty reset

<code src="../demos/reset/ForceEmpty.tsx"/>

## Reset and verify

<code src="../demos/reset/Verify.tsx"/>

## Force empty reset and verify

<code src="../demos/reset/ForceEmptyAndVerfy.tsx"/>

## API

### Reset API

Other API reference <https://ant.design/components/button-cn/>

| Property name          | Type                                                                                             | Description                                              | Default value |
| ---------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------- |
| onClick                | `(event: MouseEvent) => void \|boolean`                                                          | Click event, if it returns false, it can block resetting | -             |
| onResetValidateSuccess | (payload: any) => void                                                                           | Reset validation success event                           | -             |
| onResetValidateFailed  | (feedbacks: [IFormFeedback](https://core.formilyjs.org/api/models/form#iformfeedback)[]) => void | Reset validation failure event                           | -             |
