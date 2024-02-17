import { describe, expect, test } from "vitest";

import { visit } from "./visit";

describe("visit", () => {
	test("should visit a single node", () => {
		let actualNode: RootNode | undefined = undefined;

		visit<Nodes>(TREE, {
			Root(node) {
				actualNode = node;
			},
		});

		expect(actualNode).toStrictEqual(TREE);
	});

	test("should visit a list of nodes", () => {
		const actualNodes: VariableNode[] = [];

		visit<Nodes>(TREE, {
			Variable(node) {
				actualNodes.push(node);
			},
		});

		expect(actualNodes).toHaveLength(1);
		expect(actualNodes[0]).toStrictEqual(TREE.value.value[0]);
	});
});

const TREE = {
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
} as const;

type Nodes = {
	Array: ArrayNode;
	Root: RootNode;
	Variable: VariableNode;
};

type Node<Type, Value> = {
	type: Type;
	value: Value;
};

type VariableNode = Node<"Variable", string>;

type ArrayNode = Node<"Array", VariableNode[]>;

type RootNode = Node<"Root", ArrayNode[]>;
