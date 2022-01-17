# react-simple-modal-cb

Here is the first [NPM Package](https://www.npmjs.com/package/react-simple-modal-cb) I built and I made it for my OpenClassroom's course.

I developped a simple modal to display some customizable text with a close button on it.

It requires React Hooks useState to works and some defined props.

Here is an exemple followed by the confiiguration steps to add this package into your project.

![exemple](https://i.ibb.co/Y8hmPc5/react-simple-modal-oc-p14.png)

## Configuration

1. Open your terminal into your project and do `npm i react-simple-modal-p14`
2. Import the modal package with `import { Modal } from "react-simple-modal-p14"` into your file
3. Set your text props with `const setText = string` inside your component
4. Set modal's trigger anywhere you want to call it with `setShowModal(true)`
5. To close the moddal define `setShowModal(false)` anywhere you want to close it
6. Set the modal with props into your component by copy/past the following code

```jsx
<Modal text={setText} show={showModal} onClose={handleOnClose} />
```

## License

MIT © [CB23](https://github.com/BihelCharly/react-simple-modal-cb)
