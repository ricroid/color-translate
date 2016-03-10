# color-translate.js

An script to translate color formats.

### Usage

```javascript

ct.getHex('hsl(218, 80%, 65%)');              // Returns String "#5e93ed"

ct.getRGB('hsl(218, 80%, 65%)', []);          // Returns Array [94, 147, 237]

ct.getHSL("#5e93ed", {});                     // Returns Object {h: 218, s: 80, l: 65}

ct.getName('hsl(218, 80%, 65%)');             // Returns String "Blue"

ct.getName('hsl(218, 80%, 65%)', true);       // Returns String "Cornflower Blue"

```

### Methods

ct.getHex(color [,output_format])

ct.getRGB(color [,output_format])

ct.getHSL(color [,output_format])

ct.getName(color [,complex])

Parameters:
* **color:** The color must be a string in hex, rgb or hsl format.
* **output_format** (Default: **""**): Returns the value in a specific format, the value would be **""** for string, **[]** for array and **{}** for object.
* **complex** (Default: **false**): **false** value returns the name associated to a short variety of colors. **true** value returns the name associated to a long variety of colors.

