# Form

> The combination of FormProvider + FormLayout + form tags can help us quickly implement forms that are submitted with carriage return and can be laid out in batches

## Use Cases

<code src="../demos/form/Form.tsx"/>

<Alert style="margin-top:20px">
Note: To realize the carriage return submission, we cannot pass the onSubmit event to it when using the Submit component, otherwise the carriage return submission will become invalid. The purpose of this is to prevent users from writing onSubmit event listeners in multiple places at the same time, and processing logic If they are inconsistent, it is difficult to locate the problem when submitting.
</Alert>

## API

For layout-related API properties, we can refer to [FormLayout](./form-layout), and the rest are the unique API properties of the Form component

| Property name          | Type                                                                                             | Description                                                         | Default value |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ------------- |
| form                   | [Form](https://core.formilyjs.org/api/models/form)                                               | Form example                                                        | -             |
| component              | string                                                                                           | Rendering component, can be specified as custom component rendering | `form`        |
| previewTextPlaceholder | ReactNode                                                                                        | Preview State Placeholder                                           | `N/A`         |
| onAutoSubmit           | `(values:any)=>any`                                                                              | Carriage return submit event callback                               | -             |
| onAutoSubmitFailed     | (feedbacks: [IFormFeedback](https://core.formilyjs.org/api/models/form#iformfeedback)[]) => void | Carriage return submission verification failure event callback      | -             |
