import React from "react";

const Blog = () => {
  return (
    <div className="mx-12 mt-8">
      <div>
        <h1 className="text-3xl text-primary">
          How will you improve the performance of a React Application?
        </h1>
        <p>
          Internally, React uses several clever techniques to minimize the
          number of costly DOM operations required to update the UI. For many
          applications, using React will lead to a fast user interface without
          doing much work to specifically optimize for performance.
          Nevertheless, there are several ways you can speed up your React
          application.
        </p>
        <li>Optimizing performance in a React application</li>
        <li>Keeping component state local where necessary.</li>
        <li>Memoizing React components to prevent unnecessary re-renders.</li>
        <li>Code-splitting in React using dynamic import()</li>
        <li>Windowing or list virtualization in React.</li>
        <li>Lazy loading images in React.</li>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl text-primary">
          {" "}
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          There are four main types of state you need to properly manage in your
          React apps:
        </p>
        <li>Local state</li>
        <li>Global state</li>
        <li>Server state</li>
        <li>URL state</li>
        <p>
          Managing state in your React apps isn’t as simple as using useState or
          useReducer. Not only are there are a lot of different kinds of state,
          but there often dozens of ways of managing each kind. Which should you
          choose? In this guide, we will uncover the several kinds of state in
          your React apps that you might not be aware of, plus how to manage
          them in the most effective way.
        </p>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl text-primary">
          {" "}
          How does prototypical inheritance work?
        </h1>
        <p>
          JavaScript is a prototype-based, Object Oriented programming language.
          After the ES6 updates, JavaScript allowed for “prototypal
          inheritance”, meaning that objects and methods can be shared,
          extended, and copied. Sharing amid objects makes for easy inheritance
          of structure (data fields), behavior (functions / methods), and state
          (data values). JavaScript is the most common of the prototype-capable
          languages, and its capabilities are relatively unique. When used
          appropriately, prototypical inheritance in JavaScript is a powerful
          tool that can save hours of coding. Today, we want to get you
          acquainted with prototypal inheritance in JavaScript to get you up to
          date with the ES6 capabilities.
        </p>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl text-primary">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h1>
        <p>
          When you directly update the state, it does not change this. state
          immediately. Instead, it creates a pending state transition, and
          accessing it after calling this method will only return the present
          value. You will lose control of the state across all components.
        </p>
        <p>
          If you update it directly, calling the setState() afterward may just
          replace the update you made. When you directly update the state, it
          does not change this.state immediately. Instead, it creates a pending
          state transition, and accessing it after calling this method will only
          return the present value. You will lose control of the state across
          all components.
        </p>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl text-primary">
          {" "}
          What is a unit test? Why should write unit tests
        </h1>
        <p>
          Unit tests are typically automated tests written and run by software
          developers to ensure that a section of an application (known as the
          "unit") meets its design and behaves as intended. In procedural
          programming, a unit could be an entire module, but it is more commonly
          an individual function or procedure.
        </p>
        <p>
          Unit testing ensures that all code meets quality standards before it's
          deployed. This ensures a reliable engineering environment where
          quality is paramount. Over the course of the product development life
          cycle, unit testing saves time and money, and helps developers write
          better code, more efficiently
        </p>
      </div>
    </div>
  );
};

export default Blog;
