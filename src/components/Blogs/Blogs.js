import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs text-lime-900 m-6'>

            <div className='bg-lime-200 p-6 rounded-lg'>
                <h3 className='text-2xl font-bold'>1. What is the purpose of react router?</h3>
                <p className='text-xl px-1 py-1 font-semibold'><strong>Answer: </strong>Easily the most notable feature in this release is the addition of some hooks (for React 16.8 users, ofc). We are excited about the ability that hooks give us to compose state and behavior instead of just composing elements.
                    <br />
                    At its heart, React Router is a state container for the current location, or URL. It keeps track of the location and renders different <strong>Route</strong>s as it changes, and it also gives you tools to update the location using <strong>Link</strong>s and the history API. Given the fact that managing this piece of state is the router's main responsibility, you can imagine that a new primitive that lets us compose state is going to enable a few things we couldn't do before!</p>
            </div>
            <div className='bg-lime-200  p-6 rounded-lg'>
                <h3 className='text-2xl font-bold'>2. How does context api works?</h3>
                <p className='text-xl px-1 font-semibold py-1'><strong>Answer: </strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                <br />
                <strong>React.createContext()</strong> is all you need. It returns a consumer and a provider. <strong>Provider</strong> is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. <strong>Consumer</strong> as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className='bg-lime-200 p-6 rounded-lg'>
                <h3 className='text-2xl font-bold'>3. What is useRef hook?</h3>
                <p className='text-xl px-1 py-1 font-semibold'><strong>Answer: </strong> <strong>useRef</strong> returns a mutable ref object whose <strong>.current</strong> property is initialized to the passed argument <strong>(initialValue)</strong>. The returned object will persist for the full lifetime of the component.
                <br />
                Essentially, <strong>useRef</strong> is like a “box” that can hold a mutable value in its <strong>.current</strong> property.
                <br />
                However, <strong>useRef()</strong> is useful for more than the <strong>ref</strong> attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
                <br />
                This works because <strong>useRef()</strong> creates a plain JavaScript object. The only difference between <strong>useRef()</strong> and creating a <strong>current: ...</strong> object yourself is that <strong>useRef</strong> will give you the same ref object on every render.
                </p>
            </div>

        </div>
    );
};

export default Blogs;