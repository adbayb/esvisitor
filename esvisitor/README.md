<br>
<div align="center">
    <h1><img width="256" alt="ESVisitor" title="ESVisitor" src="https://github.com/adbayb/esvisitor/assets/10498826/136faa17-8cc2-4ef8-9eda-60f1cbeb4f54"></h1>
    <strong>An ECMAScript module to visit any hashmap-like structure (AST, custom tree, ...) and apply some algorithms</strong>
</div>
<br>
<br>

## ✨ Features

-   Tiny module with zero dependencies (less than 300B 🚀)
-   Apply the visitor design pattern in a functional way with ease
-   Tree-structure agnostic (AST whatever the underlying parser, custom tree, ...).  
    Any hashmap-like structure can be visited as long as each node exposes a `type` field

<br>

## 🚀 Quickstart

1️⃣ Install the library:

```bash
# Npm
npm install esvisitor
# Pnpm
pnpm add esvisitor
# Yarn
yarn add esvisitor
```

2️⃣ Once you're done, you can play with the API:

```ts
import { visit } from "esvisitor";

visit<Nodes>(
	{
		type: "Root",
		value: {
			type: "Array",
			value: [
				{
					type: "Variable",
					value: "Hello",
				},
			],
		},
	},
	{
		Array(node) {
			console.log("Array node: ", node);
		},
		Root(node) {
			console.log("Root node: ", node);
		},
		Variable(node) {
			console.log("Variable node: ", node);
		},
	},
);

type Nodes = {
	Array: Node<"Array", Nodes["Variable"][]>;
	Root: Node<"Root", Nodes["Array"][]>;
	Variable: Node<"Variable", string>;
};

type Node<Type, Value> = {
	type: Type;
	value: Value;
};
```

_You can check the [examples](../examples/) folder for different hashmap structure processing (including parser-specific abstract syntax trees)._

<br>

## ✍️ Contribution

We're open to new contributions, you can find more details [here](https://github.com/adbayb/esvisitor/blob/main/CONTRIBUTING.md).

<br>

## 📖 License

[MIT](https://github.com/adbayb/esvisitor/blob/main/LICENSE "License MIT")

<br>
