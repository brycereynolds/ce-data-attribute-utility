# ce-data-attribute-utility
Utility for using the Chrome Extension data attribute grabber (ce-data-attribute).

## Usage
The current data attribute grabber is hardcoded for specific data-attributes. In the future, that will change and this plugin will be updated to support other data attributes.

```
import {
    isDebugEnabled,
    injectDebugAttributes,
} from 'ce-data-attribute-utility';


// Check to see that the user has the plugin enabled
// This is useful if you need to alter classes

isDebugEnabled();
// => bool

injectDebugAttributes('my-key-label', 743834)
// => { 'data-nflx-key': 743834, 'data-nflx-key-label': 'my-key-label' }
```

#### Using with React
```
import {
    injectDebugAttributes,
} from 'ce-data-attribute-utility';

function MyElement(props) {
  return (
    <div {...injectDebugAttributes('user', props.user.id)}>
      My User: {props.user.name}
    </div>
  )
}
```