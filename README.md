# frover-labs-components
---
## AsyncButton Component

The `AsyncButton` component is used to create a button that handles asynchronous operations, such as fetching data from an API or submitting a form.

### Props

The `AsyncButton` component accepts the following props:

| Prop             | Type                  | Required | Default Value | Description                                                                                       |
|------------------|-----------------------|----------|---------------|---------------------------------------------------------------------------------------------------|
| `onClick`        | Function              | Yes      | N/A           | Callback function to execute when the button is clicked.                                           |
| `label`          | String                | Yes      | N/A           | Text to display on the button.                                                                     |
| `loadingLabel`   | String                | No       | 'Loading...'  | Text to display on the button when it is in a loading state (during asynchronous operation).       |
| `disabled`       | Boolean               | No       | `false`       | If `true`, disables the button.                                                                    |
| `className`      | String                | No       | N/A           | Custom CSS class name(s) to apply to the button.                                                   |
| `style`          | Object                | No       | N/A           | Inline styles to apply to the button.                                                              |
| `isLoading`      | Boolean               | No       | `false`       | If `true`, displays the button in a loading state (useful for indicating ongoing async operation). |

---
## useAsyncButton Custom Hook

The `useAsyncButton` custom hook provides state management for creating an asynchronous button with customizable text, subtext, background color, and loading indicators.

## Dependencies

This custom hook requires the following libraries:

- CircularProgress: Component from '@mui/material' for displaying a circular loading indicator
- AiOutlineCheck, AiOutlineClose: Icons from 'react-icons/ai' for displaying success and error indicators

## Usage

### Parameters

The `useAsyncButton` hook accepts an optional initial text parameter to set the initial label of the button.

| Parameter     | Type     | Default Value | Description                                                                                     |
|---------------|----------|---------------|-------------------------------------------------------------------------------------------------|
| `initialText` | String   | 'Click Me!'   | Initial text to display on the button.                                                          |

### Return Value

The `useAsyncButton` hook returns a mutable ref object containing the following properties and methods:

| Property/Method  | Type                 | Description                                                                                   |
|------------------|----------------------|-----------------------------------------------------------------------------------------------|
| `loading`        | Boolean              | State indicating if the button is in a loading state.                                          |
| `text`           | String               | Current text displayed on the button.                                                           |
| `subText`        | String               | Additional text or subtext associated with the button.                                          |
| `bgColorClass`   | String               | CSS class name for background color of the button.                                              |
| `setLoading`     | Function             | Setter function to update the loading state of the button.                                      |
| `setText`        | Function             | Setter function to update the main text displayed on the button.                                |
| `setSubText`     | Function             | Setter function to update the additional text or subtext of the button.                         |
| `setBgColorClass` | Function             | Setter function to update the background color CSS class of the button.                         |

---
# CustomButton Component

The `CustomButton` component is a custom button component built on top of Material-UI's `Button` and `CircularProgress` components, designed for submitting forms or handling asynchronous actions.

## Dependencies

This component requires the following libraries:

- @mui/material: Material-UI library components
  - Button: ^5.0.0 or higher
  - CircularProgress: ^5.0.0 or higher

## Props

The `CustomButton` component accepts the following props:

| Prop              | Type       | Required | Default Value | Description                                                                                      |
|-------------------|------------|----------|---------------|--------------------------------------------------------------------------------------------------|
| `isLoading`       | Boolean    | Yes      | N/A           | If `true`, displays a loading spinner inside the button.                                          |
| `onClick`         | Function   | Yes      | N/A           | Callback function to execute when the button is clicked.                                          |
| `children`        | React Node | Yes      | N/A           | The content to display inside the button.                                                         |
| `backgroundColor` | String     | No       | N/A           | Custom background color for the button.                                                           |
| `rippleColor`     | String     | No       | N/A           | Custom ripple color effect on hover.                                                              |
| `textColor`       | String     | No       | N/A           | Custom text color for the button.                                                                 |

---
# CustomCard Component

The `CustomCard` component is a custom card component designed using Material-UI's `Card`, `CardContent`, `CardMedia`, and `Typography` components, featuring dynamic content, images, and interactive elements.

## Dependencies

This component requires the following libraries:

- @mui/material: Material-UI library components
  - Card: ^5.0.0 or higher
  - CardContent: ^5.0.0 or higher
  - CardMedia: ^5.0.0 or higher
  - Typography: ^5.0.0 or higher

## Props

The `CustomCard` component accepts the following props:

| Prop             | Type     | Required | Default Value | Description                                                                                     |
|------------------|----------|----------|---------------|-------------------------------------------------------------------------------------------------|
| `title`          | String   | Yes      | N/A           | Title of the card.                                                                              |
| `content`        | String   | Yes      | N/A           | Main content or description displayed on the card.                                               |
| `imageSrc`       | String   | Yes      | N/A           | Source URL for the image displayed on the card.                                                  |
| `time`           | String   | Yes      | N/A           | Time or timestamp displayed on the card.                                                         |
| `unreadMessages` | Number   | No       | 0             | Number of unread messages to display on the card (optional).                                     |
| `isActive`       | Boolean  | No       | false         | If `true`, displays an active indicator on the card (optional).                                  |

---
# CustomDialog Component

The `CustomDialog` component is a versatile dialog component that supports both dialog and drawer layouts based on screen size, allowing for responsive user interactions.

## Dependencies

This component requires the following libraries or components:

- React: ^16.8.0 or higher
- Custom dialog and drawer components (`Dialog`, `DialogTrigger`, `DialogContent`, `DialogClose`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerClose`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`)
- Button component (`Button`) for rendering buttons within the dialog or drawer.

## Props

The `CustomDialog` component accepts the following props:

| Prop      | Type   | Required | Default Value | Description                              |
|-----------|--------|----------|---------------|------------------------------------------|
| `content` | Object | Yes      | N/A           | Object containing dialog content details, such as `title`, `userImage`, `userName`, `email`, and `buttons`. |

# CustomInput Component

The `CustomInput` component is a customizable input field component that supports various input types and validation rules, including password visibility toggle and error handling.

## Dependencies

This component requires the following libraries or components:

- React: ^16.8.0 or higher
- react-icons: For displaying eye icons (`FaRegEye`, `FaRegEyeSlash`) for password visibility toggle.

## Props

The `CustomInput` component accepts the following props:

| Prop              | Type     | Required | Default Value | Description                                                                                     |
|-------------------|----------|----------|---------------|-------------------------------------------------------------------------------------------------|
| `options`         | Object   | Yes      | N/A           | Object containing configuration options for the input field, including `name`, `type`, `value`, `placeholder`, `required`, `minLength`, `maxLength`, `pattern`, `passwordRequirements`, etc. |
| `label`           | String   | Yes      | N/A           | Label for the input field.                                                                      |
| `isVisible`       | Boolean  | No       | true          | If `true`, indicates whether the input field is visible (only relevant for certain UI scenarios). |
  
### `options` Object

The `options` object passed to `CustomInput` can contain the following properties:

- `name`: Name attribute for the input field.
- `type`: Type of the input field (`text`, `password`, etc.).
- `value`: Current value of the input field.
- `placeholder`: Placeholder text for the input field.
- `required`: Boolean indicating if the input field is required.
- `minLength`: Minimum length of the input value.
- `maxLength`: Maximum length of the input value.
- `pattern`: Regular expression pattern for input validation.
- `passwordRequirements`: Object specifying password requirements (`requireCapitalLetter`, `requireSymbol`, `requireNumber`).

---
# DynamicForm Component

The `DynamicForm` component is a dynamic form builder that allows users to input various details and generate a JSON representation of the form data. It includes sections for YouTube and Instagram posts, which can be dynamically added or removed.

## Dependencies

This component requires the following dependencies:

- @mui/material: For UI components like buttons (`ButtonBase`).
- @react-pdf/renderer: For rendering PDF previews (`PDFViewer`).
- CustomPDF: A custom component for displaying PDF previews based on form data.
- Tabs, TabsList, TabsTrigger, TabsContent: Custom components for managing tab navigation.

## Props

The `DynamicForm` component does not accept any props directly. It manages its state internally and generates a JSON representation of the form data upon user interaction.

## State

The `DynamicForm` component maintains the following state variables:

- `party1Name`: String representing Party 1's name.
- `date`: String representing a date field.
- `party2Name`: String representing Party 2's name.
- `otherStuff`: String representing additional form details.
- `youtubeShorts`: Array of objects representing YouTube Shorts items.
- `youtubeVideos`: Array of objects representing YouTube Videos items.
- `instagramPosts`: Array of objects representing Instagram Posts items.
- `instagramStories`: Array of objects representing Instagram Stories items.
- `formData`: Object representing the current form data in JSON format.

## Functions

### `addYoutubeItem(section)`

Adds a new item to either `youtubeShorts` or `youtubeVideos` based on the `section` parameter ('shorts' or 'videos').

### `removeYoutubeItem(section, index)`

Removes an item from either `youtubeShorts` or `youtubeVideos` based on the `section` parameter ('shorts' or 'videos') and the `index` of the item.

### `addInstagramItem(section)`

Adds a new item to either `instagramPosts` or `instagramStories` based on the `section` parameter ('posts' or 'stories').

### `removeInstagramItem(section, index)`

Removes an item from either `instagramPosts` or `instagramStories` based on the `section` parameter ('posts' or 'stories') and the `index` of the item.

### `generateJSON()`

Generates a JSON representation of the current form data (`formData`) and logs it to the console.

---
