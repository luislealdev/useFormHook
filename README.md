# useForm Simple Hook (React)

[![NPM Version Latest](https://img.shields.io/npm/v/useform-simple-hook/latest)](https://www.npmjs.com/package/useform-simple-hook)
[![NPM Downloads](https://img.shields.io/npm/dm/useform-simple-hook)](https://www.npmjs.com/package/useform-simple-hook)

Easy hook for react to control forms states.

Created by [@luislealdev](https://github.com/luislealdev).

## Install

With npm

```
npm install useform-simple-hook
```

or yarn

```
yarn add useform-simple-hook
```

## Example

Outside your component declare fields and initial values.

```ts
const formData = {
  name: "",
  message: "",
  email: "",
};

interface formData {
  name?: string;
  message?: string;
  email?: string;
}
```

On your component call the hook and desestructure your data:

```jsx
const { formState, onInputChange, onResetForm } = useForm(formData);

const { nombre, mensaje, correo }: formData = formState;
```

On your form use it:

```html
<input
  required
  name="name"
  value="{name}"
  onChange="{onInputChange}"
  type="text"
  placeholder="name"
/>

<textarea
  name="message"
  value="{message}"
  onChange="{onInputChange}"
  className="white-text f-size-16 p-10"
  placeholder="message"
></textarea>
```

### Real life example:
Also this example is using [leal-styles.css](https://luisrrleal.com/styles/leal-styles.css).

```ts
import { useForm } from "useform-simple-hook";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

const formData = {
  name: "",
  phone: "",
  mail: "",
};

interface formData {
  name?: string;
  phone?: string;
  mail?: string;
}

export const ContactForm = () => {
  const { formState, onInputChange, onResetForm } = useForm(formData);
  const { name, phone, mail }: formData = formState;

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    send("###", "######", formState, "##############")
      .then((response) => {
        Swal.fire(
          "Message sent!",
          "We'll see you soon.",
          "success"
        );
        onResetForm();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Try again later",
        });
      });
  };

  return (
    <section id="contactForm" className="flex column center-h align-center">
      <div>
        <h3 className="purple-text-bg f-size-50">Contact Us</h3>
        <div className="flex align-center">
          <hr />
          <p className="f-size-24" style={{ color: "#5041DB" }}>
            ¡Let's start our history!
          </p>
        </div>
      </div>
      <br />
      <div className="flex center-h width-40">
        <form
          action="/"
          method="POST"
          onSubmit={onSubmit}
          className="m-10 flex column align-center pb-50 width-100"
        >
          <div className="width-100">
            <p className="f-size-24">Full Name</p>
            <input
              type="text"
              className="input width-100"
              placeholder="Full Name"
              required
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="width-100">
            <p className="f-size-24">Phone</p>
            <input
              type="tel"
              className="input width-100"
              placeholder="Phone"
              required
              name="Phone"
              value={Phone}
              onChange={onInputChange}
              pattern="[1-9]{1}[0-9]{9}"
            />
          </div>
          <div className="width-100">
            <p className="f-size-24">Email</p>
            <input
              type="email"
              className="input width-100"
              placeholder="mail@mail.com"
              required
              name="mail"
              value={mail}
              onChange={onInputChange}
            />
          </div>
          <button className="call-to-action white-text mt-50 f-size-24">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};
```