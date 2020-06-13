# Build Tree - 1.0.0

Convert a flat array with parent child mapping to a nested tree.

## Example

### Installing the package

`npm i build-tree --save`

### Import the package

`import { buildTree } from "build-tree";`

### Convert Array to Tree

#### Example Array

```
const data = [
  {
    "id": "1",
    "name": "Grocery",
    "parent": null
  },
  {
    "id": "2",
    "name": "Fresh",
    "parent": null
  },
  {
    "id": "8",
    "name": "Imported Fruits",
    "parent": {
      "id": "6"
    }
  },
  {
    "id": "9",
    "name": "Local Fruits",
    "parent": {
      "id": "6"
    }
  },
  {
    "id": "6",
    "name": "Fruits",
    "parent": {
      "id": "2"
    }
  }
];
```

#### Convert

```
  const tree = buildTree(data, "id", "parent.id");
```

#### Results

```
[
    {
        "id": "1",
        "name": "Grocery",
        "parent": null
    },
    {
        "id": "2",
        "name": "Fresh",
        "parent": null,
        "children": [
        {
            "id": "6",
            "name": "Fruits",
            "parent": {
            "id": "2"
            },
            "children": [
            {
                "id": "8",
                "name": "Imported Fruits",
                "parent": {
                "id": "6"
                }
            },
            {
                "id": "9",
                "name": "Local Fruits",
                "parent": {
                "id": "6"
                }
            }
            ]
        }
        ]
    }
]

```
