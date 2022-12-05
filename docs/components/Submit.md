# Submit

> Submit button

## Ordinary submission

<code src="../demos/submit/Ordinary.tsx"/>

## Prevent Duplicate Submission (Loading)

<code src="../demos/submit/PreventDuplicate.tsx"/>

## API

For button-related API properties, we can refer to <https://ant.design/components/button/>, and the rest are the unique API properties of the Submit component

| Property name   | Type                                                                                             | Description                                               | Default value |
| --------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ------------- |
| onClick         | `(event: MouseEvent) => void \| boolean`                                                         | Click event, if it returns false, it can block submission | -             |
| onSubmit        | `(values: any) => Promise<any> \| any`                                                           | Submit event callback                                     | -             |
| onSubmitSuccess | (payload: any) => void                                                                           | Submit successful response event                          | -             |
| onSubmitFailed  | (feedbacks: [IFormFeedback](https://core.formilyjs.org/api/models/form#iformfeedback)[]) => void | Submit verification failure event callback                | -             |
