import { rootComponentInstance } from "../react-root/index";
import { createElement } from "./createElement";
import {
	VirtualNodeType,
	ElementAttachedNeedAttr,
} from "./interface";

export const render = (
	vNodeRender: () => VirtualNodeType,
	realNode?: ElementAttachedNeedAttr | null
) => {
	rootComponentInstance.mount(vNodeRender, realNode);
	rootComponentInstance.render();
};

export default {
	createElement,
	render,
};