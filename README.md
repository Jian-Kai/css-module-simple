# Simple Css-Module to control child dom style

## add a stable class name for change style

> src -> components -> Box -> index.js

```javascript
    const Box = (props) => {
        const { customClassName } = props;

        return <div className={`${style.box} ${customClassName}`}>
            <div className={`innerBox ${style.innerBox}`} />
        </div>
    }
```

## use customClass control innerBox style

use `:globle(className)` to avoid hash className.

> src -> App.js

```javascript
function App() {
        return (
            <div className={style.app}>
                <Box customClassName={style.customBox1} />
                <Box customClassName={style.customBox2} />
            </div>
        );
    }
```

> src -> app.module.style

```scss
    .app {
        width: 100%;
        height: 100vh;

        .customBox1 {
            background-color: white;
            :global(.innerBox) {
                background-color: black;
                height: 100%;
            }
        }

        .customBox2 {
            :global(.innerBox) {
                background-color: blue;
                width: 100%;
            }
        }
    }
```
