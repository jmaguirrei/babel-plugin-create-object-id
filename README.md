# babel-plugin-create-object-id

Creates a sequential id inside objects with render method (components) for later use in CSS scoping

# usage

In .babelrc file include

plugins: [

  [
    "create-object-id"
  ],

]

# input

Any object containing a render method, like:

export default () => {

  return {

    render() {
      return 'Someting'
    };

  }

}


Will be transpiled to:

export default () => {

  return {

    id: 1000,

    render() {
      return 'Someting'
    };

  }

}

Where the 1000 is a unique id for this component (the definition not the instances that may exists)
and starts at 1000 and increments by 1 for each file: 1001, 1002, ....

# Why?

This way to can have a unique id for each component that you can use, for example, to scope classes, like:

render() {
  return (
    <div className={`${this.id}--wrapper`}>
      Content
    </div>
  )
}

Or (a better option) to generate this automatically witha Higher Order Function for each component.



